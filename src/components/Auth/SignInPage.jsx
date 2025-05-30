import { useForm } from "react-hook-form";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import {
  FormBtnsList,
  FormWrapper,
  HidePasswordBtn,
  InputItem,
  InputList,
  TextInput,
} from "../Common/Form.styled";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "~/schemas/signSchema";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { useSigninMutation } from "~/Redux/authSlice";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";

import { useState } from "react";

export const SignInPage = () => {
  const [signIn] = useSigninMutation();
  const [passVisible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    signIn({ login: login.toLowerCase(), password }).then(reset);
  };

  return (
    <Section>
      <Container>
        <FormWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <InputList>
            <InputItem>
              <TextInput type="text" placeholder=" " {...register("login")} />
              <label>Login</label>
              <ValidationErrorText inputError={errors.login} />
            </InputItem>
            <InputItem>
              <TextInput
                name="password"
                type={passVisible ? "text" : "password"}
                placeholder=" "
                {...register("password")}
              />
              <label htmlFor="password">Password</label>
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
            <PrimaryBtn type="submit">log in</PrimaryBtn>
            <SecondaryBtnLink to={"/auth/signup"}>register</SecondaryBtnLink>
          </FormBtnsList>
        </FormWrapper>
      </Container>
    </Section>
  );
};
