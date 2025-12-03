import { DecorationBg } from "../../pages/CreateOrderPage.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { recipientSchema } from "~/schemas/newParcelSchema";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { useNavigate } from "react-router-dom";
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
} from "../Common/Form.styled";
import { useTranslation } from "react-i18next";
import { AddressAutocomplete } from "../Common/AddressAutocomplete";

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

    try {
      window.plausible?.("recipient", {
        callback: () => {
          navigate("/createorder/confirm");
        },
      });
    } catch (error) {
      navigate("/createorder/confirm");

      console.warn(error);
    }
  };

  return (
    <DecorationBg>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormName>{t("form.recipient")}</FormName>
        <InputList>
          <InputItem>
            <TextInput
              {...register("name", { setValueAs: (v) => v.trim() })}
              type="text"
              placeholder=" "
            />
            <label>{t("form.name")} *</label>
            <ValidationErrorText inputError={errors.name} />
          </InputItem>
          <InputItem>
            <TextInput
              {...register("phone")}
              type="tel"
              placeholder=" "
              onFocus={() => setValue("phone", "+")}
            />
            <label>{t("form.phone")} *</label>
            <ValidationErrorText inputError={errors.phone} />
          </InputItem>
          <InputItem>
            <AddressAutocomplete
              control={control}
              setValue={setValue}
              name={"address"}
            />
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
