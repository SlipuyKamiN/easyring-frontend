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
                  type="text"
                  placeholder=" "
                  {...register(name)}
                />
                <label>{name.replace("N", " n")}</label>
                <ValidationErrorText inputError={errors[name]} />
              </InputItem>
            ))}
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
          </InputList>
          <FormBtnsList>
            {pageName === "signup" ? (
              <>
                <PrimaryBtn type="submit">Register</PrimaryBtn>
                <SecondaryBtnLink to={"/auth/signin"}>log in</SecondaryBtnLink>
              </>
            ) : (
              <>
                <PrimaryBtn type="submit">Update</PrimaryBtn>
                <SecondaryBtn type="button" onClick={logout}>
                  Log out
                </SecondaryBtn>
              </>
            )}
          </FormBtnsList>
        </FormWrapper>
      </Container>
    </Section>
  );
};
