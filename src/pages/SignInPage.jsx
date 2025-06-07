import { useForm } from "react-hook-form";
import {
  PrimaryBtn,
  SecondaryBtnLink,
} from "~/components/Common/Button.styled";
import {
  FormBtnsList,
  FormWrapper,
  HidePasswordBtn,
  InputItem,
  InputList,
  TextInput,
} from "~/components/Common/Form.styled";
import {
  Container,
  Section,
} from "~/components/SharedLayout/SharedLayout.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "~/schemas/signSchema";
import { ValidationErrorText } from "~/components/SharedLayout/ValidationErrorText";
import { useSigninMutation } from "~/Redux/authSlice";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";

import { useState } from "react";
import { handleInputTextCase } from "~/helpers/handleInputTextCase";
import { useTranslation } from "react-i18next";
import { notification } from "~/components/Common/notification";

const SignInPage = () => {
  const { t } = useTranslation();
  const [signIn] = useSigninMutation();
  const [passVisible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(signInSchema),
  });

  const onSubmit = ({ login, password }) => {
    signIn({ login: login.toLowerCase(), password })
      .unwrap()
      .then(reset)
      .catch((e) => notification(e.data.message));
  };

  return (
    <Section>
      <Container>
        <FormWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <InputList>
            <InputItem>
              <TextInput
                type="text"
                placeholder=" "
                {...register("login")}
                onInput={(e) => handleInputTextCase(e.target, setValue)}
              />
              <label>{t("form.login")}</label>
              <ValidationErrorText inputError={errors.login} />
            </InputItem>
            <InputItem>
              <TextInput
                name="password"
                type={passVisible ? "text" : "password"}
                placeholder=" "
                {...register("password")}
              />
              <label htmlFor="password">{t("form.password")}</label>
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
            <PrimaryBtn type="submit">{t("form.action.log-in")}</PrimaryBtn>
            <SecondaryBtnLink to={"/auth/signup"}>
              {t("form.action.register")}
            </SecondaryBtnLink>
          </FormBtnsList>
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default SignInPage;
