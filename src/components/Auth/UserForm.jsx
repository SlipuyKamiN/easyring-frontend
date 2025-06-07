import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "~/schemas/signSchema";
import {
  PrimaryBtn,
  SecondaryBtn,
  SecondaryBtnLink,
} from "../Common/Button.styled";
import {
  FormBtnsList,
  FormWrapper,
  HidePasswordBtn,
  InputItem,
  InputList,
  TextInput,
} from "../Common/Form.styled";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { useState } from "react";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { handleInputTextCase } from "~/helpers/handleInputTextCase";
import { useLogoutMutation } from "~/Redux/authSlice";
import { useTranslation } from "react-i18next";

const initialValues = {
  name: "",
  login: "",
  phone: "",
  email: "",
  password: "",
  carNumber: "",
};

const inputNames = ["name", "login", "phone", "email", "carNumber"];

export const UserForm = ({
  defaultValues = initialValues,
  onSubmit,
  pageName = "signup",
}) => {
  const { t } = useTranslation();
  const [passVisible, setVisible] = useState(false);
  const [logout] = useLogoutMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(signUpSchema),
  });

  return (
    <Section>
      <Container>
        <FormWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <InputList>
            {inputNames.map((name) => (
              <InputItem key={name}>
                <TextInput
                  onInput={(e) => handleInputTextCase(e.target, setValue)}
                  type={
                    name === "phone"
                      ? "tel"
                      : name === "email"
                      ? "email"
                      : "text"
                  }
                  placeholder=" "
                  {...register(name)}
                />
                <label>{t(`form.${name}`)}</label>
                <ValidationErrorText inputError={errors[name]} />
              </InputItem>
            ))}
            <InputItem>
              <TextInput
                type={passVisible ? "text" : "password"}
                placeholder=" "
                {...register("password")}
              />
              <label>{t(`form.password`)}</label>
              <ValidationErrorText inputError={errors.password} />
              <HidePasswordBtn
                type="button"
                onClick={() => setVisible(!passVisible)}
              >
                {passVisible ? <LiaEye size={20} /> : <LiaEyeSlash size={20} />}
              </HidePasswordBtn>
            </InputItem>
          </InputList>
          <FormBtnsList>
            {pageName === "signup" ? (
              <>
                <PrimaryBtn type="submit">
                  {t("form.action.register")}
                </PrimaryBtn>
                <SecondaryBtnLink to={"/auth/signin"}>
                  {t("form.action.log-in")}
                </SecondaryBtnLink>
              </>
            ) : (
              <>
                <PrimaryBtn type="submit">{t("form.action.update")}</PrimaryBtn>
                <SecondaryBtn type="button" onClick={logout}>
                  {t("form.action.log-out")}
                </SecondaryBtn>
              </>
            )}
          </FormBtnsList>
        </FormWrapper>
      </Container>
    </Section>
  );
};
