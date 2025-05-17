import { Link, useNavigate } from "react-router-dom";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import {
  FormName,
  FormWrapper,
  InputItem,
  TextInput,
} from "./CreateOrderPage.styled";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { senderSchema } from "~/schemas/newParcelSchema";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { FormBtnsList } from "./MainInfo.styled";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { updSender } from "~/Redux/newParcelSlice";

export const Sender = () => {
  const { phone, name, address, email, comment } = useSelector(
    ({ newParcel }) => newParcel.sender
  );
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone,
      name,
      address,
      email,
      comment,
    },
    resolver: yupResolver(senderSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(updSender(data));
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
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <GeoapifyContext apiKey="de6774ac4979423286c131f56e59ff31">
                    <GeoapifyGeocoderAutocomplete
                      {...field}
                      placeholder="Full address"
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
