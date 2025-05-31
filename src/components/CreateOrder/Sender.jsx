import { useNavigate } from "react-router-dom";
import { DecorationBg } from "../../pages/CreateOrderPage.styled";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { senderSchema } from "~/schemas/newParcelSchema";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import {
  GeoapifyContext,
  GeoapifyGeocoderAutocomplete,
} from "@geoapify/react-geocoder-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { updSender } from "~/Redux/newParcelSlice";
import { getNewParcelState } from "~/Redux/newParcelSelectors";
import {
  FormName,
  FormWrapper,
  InputItem,
  InputList,
  TextInput,
  FormBtnsList,
} from "../Common/Form.styled";

export const Sender = () => {
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
    navigate("/createorder/recipient");
  };

  return (
    <DecorationBg>
      <FormWrapper onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <FormName>Sender info:</FormName>
        <InputList>
          <InputItem>
            <TextInput
              {...register("phone")}
              type="tel"
              placeholder=" "
              onFocus={() => setValue("phone", "+")}
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
            <TextInput {...register("email")} type="email" placeholder=" " />
            <label>Email</label>
            <ValidationErrorText inputError={errors.email} />
          </InputItem>
          <InputItem>
            <TextInput {...register("comment")} type="text" placeholder=" " />
            <label>Comment</label>
            <ValidationErrorText inputError={errors.comment} />
          </InputItem>
        </InputList>
        <FormBtnsList>
          <li>
            <PrimaryBtn type="Submit">Next</PrimaryBtn>
          </li>
          <li>
            <SecondaryBtnLink to={-1}>Back</SecondaryBtnLink>
          </li>
        </FormBtnsList>
      </FormWrapper>
    </DecorationBg>
  );
};
