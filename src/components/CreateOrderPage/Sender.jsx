import { Link, useNavigate } from "react-router-dom";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import {
  FormName,
  FormWrapper,
  InputItem,
  TextInput,
} from "./CreateOrderPage.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { senderSchema } from "~/schemas/newParcelSchema";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { FormBtnsList } from "./MainInfo.styled";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";

export const Sender = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone: "",
      name: "",
      address: "",
      email: "",
      comment: "",
    },
    resolver: yupResolver(senderSchema),
  });
    const navigate = useNavigate();
  

  const onSubmit = (data) => {
    console.log(data);
    navigate("/createorder/recipient");
  };

  return (
    <Section>
      <Container>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <FormName>Sender info:</FormName>
          <ul>
            <InputItem>
              <TextInput {...register("phone")} type="text" placeholder=" " />
              <label>Phone number</label>
              <ValidationErrorText inputError={errors.phone} />
            </InputItem>
            <InputItem>
              <TextInput {...register("name")} type="text" placeholder=" " />
              <label>Full name</label>
              <ValidationErrorText inputError={errors.name} />
            </InputItem>
            <InputItem>
              <TextInput {...register("address")} type="text" placeholder=" " />
              <label>Full address</label>
              <ValidationErrorText inputError={errors.address} />
            </InputItem>
            <InputItem>
              <TextInput {...register("email")} type="text" placeholder=" " />
              <label>Email</label>
              <ValidationErrorText inputError={errors.email} />
            </InputItem>
            <InputItem>
              <TextInput {...register("comment")} type="text" placeholder=" " />
              <label>Comment (recommended)</label>
              <ValidationErrorText inputError={errors.comment} />
            </InputItem>
          </ul>
          <FormBtnsList>
            <li>
              <SecondaryBtnLink to={-1}>Back</SecondaryBtnLink>
            </li>
            <li>
              <PrimaryBtn type="Submit">Next</PrimaryBtn>
            </li>
          </FormBtnsList>
        </FormWrapper>
      </Container>
    </Section>
  );
};
