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
import { signUpSchema } from "~/schemas/signSchema";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { useSignupMutation } from "~/Redux/authSlice";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  name: "",
  login: "",
  phone: "",
  email: "",
  password: "",
  carNumber: "",
};

export const SignUpPage = () => {
  const [signUp] = useSignupMutation();
  const [passVisible, setVisible] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues,
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    signUp({
      ...data,
      login: data.login.toLowerCase(),
      carNumber: data.carNumber.toUpperCase(),
    })
      .then(() => {
        navigate("/signin");
        reset();
      })
      .catch(console.log);
  };

  return (
    <Section>
      <Container>
        <FormWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <InputList>
            <InputItem>
              <TextInput type="text" placeholder=" " {...register("name")} />
              <label>Name</label>
              <ValidationErrorText inputError={errors.name} />
            </InputItem>
            <InputItem>
              <TextInput type="text" placeholder=" " {...register("login")} />
              <label>Login</label>
              <ValidationErrorText inputError={errors.login} />
            </InputItem>
            <InputItem>
              <TextInput type="text" placeholder=" " {...register("phone")} />
              <label>Phone</label>
              <ValidationErrorText inputError={errors.phone} />
            </InputItem>
            <InputItem>
              <TextInput type="text" placeholder=" " {...register("email")} />
              <label>Email</label>
              <ValidationErrorText inputError={errors.email} />
            </InputItem>
            <InputItem>
              <TextInput
                type={passVisible ? "text" : "password"}
                placeholder=" "
                {...register("password")}
              />
              <label>Password</label>
              <ValidationErrorText inputError={errors.password} />
              <HidePasswordBtn
                type="button"
                onClick={() => setVisible(!passVisible)}
              >
                {passVisible ? <LiaEye size={20} /> : <LiaEyeSlash size={20} />}
              </HidePasswordBtn>
            </InputItem>
            <InputItem>
              <TextInput
                {...register("carNumber")}
                type="text"
                placeholder=" "
              />
              <label>Car number</label>
              <ValidationErrorText inputError={errors.carNumber} />
            </InputItem>
          </InputList>
          <FormBtnsList>
            <PrimaryBtn type="submit">Register</PrimaryBtn>
            <SecondaryBtnLink to={"/signin"}>log in</SecondaryBtnLink>
          </FormBtnsList>
        </FormWrapper>
      </Container>
    </Section>
  );
};
