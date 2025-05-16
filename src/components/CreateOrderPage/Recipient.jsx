import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import {
  FormName,
  FormWrapper,
  InputItem,
  TextInput,
} from "./CreateOrderPage.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { recipientSchema } from "~/schemas/newParcelSchema";
import { FormBtnsList } from "./MainInfo.styled";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { useNavigate } from "react-router-dom";

export const Recipient = () => {
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
      comment: "",
    },
    resolver: yupResolver(recipientSchema),
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/createorder/confirm");
  };

  return (
    <Section>
      <Container>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <FormName>Recipient's info:</FormName>
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
              <PrimaryBtn type="Submit">Confirm</PrimaryBtn>
            </li>
          </FormBtnsList>
        </FormWrapper>
      </Container>
    </Section>
  );
};
