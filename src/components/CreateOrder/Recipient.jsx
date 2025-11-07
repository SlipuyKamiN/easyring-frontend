import { DecorationBg } from "../../pages/CreateOrderPage.styled";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { recipientSchema } from "~/schemas/newParcelSchema";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { useNavigate } from "react-router-dom";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { updRecipient } from "~/Redux/newParcelSlice";
import { getNewParcelState } from "~/Redux/selectors";
import {
  FormName,
  FormWrapper,
  InputItem,
  InputList,
  TextInput,
  FormBtnsList,
  GeoAddressWrapper,
} from "../Common/Form.styled";
import { useTranslation } from "react-i18next";

export const Recipient = () => {
  const { t } = useTranslation();
  const { recipient } = useSelector(getNewParcelState);
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: recipient,
    resolver: yupResolver(recipientSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updRecipient(data));

    window.plausible?.("recipient", {
      callback: () => {
        navigate("/createorder/confirm");
      },
    });
  };

  return (
    <DecorationBg>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormName>{t("form.recipient")}</FormName>
        <InputList>
          <InputItem>
            <TextInput
              {...register("phone")}
              type="tel"
              placeholder=" "
              onFocus={() => setValue("phone", "+")}
            />
            <label>{t("form.phone")}</label>
            <ValidationErrorText inputError={errors.phone} />
          </InputItem>
          <InputItem>
            <TextInput {...register("name")} type="text" placeholder=" " />
            <label>{t("form.name")}</label>
            <ValidationErrorText inputError={errors.name} />
          </InputItem>
          <InputItem>
            <GeoAddressWrapper>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <GeoapifyContext apiKey="de6774ac4979423286c131f56e59ff31">
                    <GeoapifyGeocoderAutocomplete
                      placeholder={t("form.address")}
                      limit={5}
                      filterByCircle={{
                        lat: 52.52,
                        lon: 13.405,
                        radiusMeters: 30000,
                      }}
                      placeSelect={(value) => {
                        setValue("address", value);
                      }}
                      value={field.value?.properties?.formatted || ""}
                    />
                  </GeoapifyContext>
                )}
              />
            </GeoAddressWrapper>
            <ValidationErrorText inputError={errors.address} />
          </InputItem>
          <InputItem>
            <TextInput {...register("comment")} type="text" placeholder=" " />
            <label>{t("form.comment")}</label>
            <ValidationErrorText inputError={errors.comment} />
          </InputItem>
        </InputList>
        <FormBtnsList>
          <li>
            <PrimaryBtn type="Submit">{t("form.nav.next")}</PrimaryBtn>
          </li>
          <li>
            <SecondaryBtnLink to={-1}>{t("form.nav.back")}</SecondaryBtnLink>
          </li>
        </FormBtnsList>
      </FormWrapper>
    </DecorationBg>
  );
};
