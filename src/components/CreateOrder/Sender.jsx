import { useNavigate } from "react-router-dom";
import { DecorationBg } from "../../pages/CreateOrderPage.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { senderSchema } from "~/schemas/newParcelSchema";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import { useDispatch, useSelector } from "react-redux";
import { updSender } from "~/Redux/newParcelSlice";
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

export const Sender = () => {
  const { t } = useTranslation();
  const { sender } = useSelector(getNewParcelState);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: sender,
    resolver: yupResolver(senderSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updSender(data));

    window.plausible?.("sender", {
      callback: () => {
        navigate("/createorder/recipient");
      },
    });
  };

  console.log(errors);

  return (
    <DecorationBg>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormName>{t("form.sender")}</FormName>
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
          {/* <InputItem>
            <TextInput {...register("email")} type="email" placeholder=" " />
            <label>{t("form.email")}</label>
            <ValidationErrorText inputError={errors.email} />
          </InputItem> */}
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
