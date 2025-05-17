import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import {
  DecorationBg,
  FormName,
  FormWrapper,
  InputItem,
  TextInput,
} from "./CreateOrderPage.styled";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { recipientSchema } from "~/schemas/newParcelSchema";
import { FormBtnsList } from "./MainInfo.styled";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { useNavigate } from "react-router-dom";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { updRecipient } from "~/Redux/newParcelSlice";

export const Recipient = () => {
  const { phone, name, address, comment } = useSelector(
    ({ newParcel }) => newParcel.recipient
  );
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      phone,
      name,
      address,
      comment,
    },
    resolver: yupResolver(recipientSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(updRecipient(data));
    navigate("/createorder/confirm");
  };

  return (
    <Section>
      <Container>
        <DecorationBg>
          <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <FormName>Recipient's info:</FormName>
            <ul>
              <InputItem>
                <TextInput
                  {...register("phone")}
                  type="number"
                  placeholder=" "
                />
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
                <TextInput
                  {...register("comment")}
                  type="text"
                  placeholder=" "
                />
                <label>Comment (recommended)</label>
                <ValidationErrorText inputError={errors.comment} />
              </InputItem>
            </ul>
            <FormBtnsList>
              <li>
                <PrimaryBtn type="Submit">Confirm</PrimaryBtn>
              </li>
              <li>
                <SecondaryBtnLink to={-1}>Back</SecondaryBtnLink>
              </li>
            </FormBtnsList>
          </FormWrapper>
        </DecorationBg>
      </Container>
    </Section>
  );
};
