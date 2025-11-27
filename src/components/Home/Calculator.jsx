import { useForm } from "react-hook-form";
import { SizeButtons } from "../Common/SizeButtons";
import { Container, Section } from "../SharedLayout/SharedLayout.styled";
import { SectionTitle } from "./Steps.styled";
import { AddressAutocomplete } from "../Common/AddressAutocomplete";
import { FormWrapper, InputItem } from "../Common/Form.styled";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AddressListItem } from "../Common/InfoSections.styled";
import { calculateDistance } from "~/helpers/calculateDistance";
import { calculatePrice } from "~/helpers/calculatePrice";
import { LoadingSpinner } from "../Common/LoadingSection";
import { SizeLabel } from "../Common/SizeButtons.styled";
import { CreatePickUpWrapper, PrimaryBtn } from "../Common/Button.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationErrorText } from "../SharedLayout/ValidationErrorText";
import { calculatorSchema } from "~/schemas/newParcelSchema";
import { useDispatch, useSelector } from "react-redux";
import { getNewParcelState } from "~/Redux/selectors";
import { useNavigate } from "react-router-dom";
import { updMainInfo, updRecipient, updSender } from "~/Redux/newParcelSlice";
import { FiPlusCircle } from "react-icons/fi";

export const Calculator = () => {
  const { t } = useTranslation();
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { mainInfo, sender, recipient } = useSelector(getNewParcelState);
  const {
    control,
    setValue,
    register,
    watch,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      size: mainInfo.size,
      senderAddress: sender.address,
      recipientAddress: recipient.address,
    },
    resolver: yupResolver(calculatorSchema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [senderAddress, recipientAddress] = watch([
    "senderAddress",
    "recipientAddress",
  ]);

  useEffect(() => {
    if (senderAddress && recipientAddress) {
      setIsLoading(true);
      calculateDistance(
        { address: senderAddress },
        { address: recipientAddress }
      ).then((distance) => {
        setDistance(distance);
        setIsLoading(false);

        const size = getValues("size");
        setPrice(calculatePrice(distance, size));
      });
    }
  }, [senderAddress, recipientAddress, getValues]);

  const size = watch("size");
  useEffect(() => {
    setPrice(calculatePrice(distance, size));
  }, [size, distance]);

  const onSubmit = ({ size, senderAddress, recipientAddress }) => {
    dispatch(updMainInfo({ ...mainInfo, size }));
    dispatch(updSender({ ...sender, address: senderAddress }));
    dispatch(updRecipient({ ...recipient, address: recipientAddress }));

    window.plausible?.("create-pickup-calculator", {
      callback: () => {
        navigate("/createorder/maininfo");
      },
    });
  };

  return (
    <Section id="calculator">
      <Container>
        <SectionTitle>{t("price-calculator")}</SectionTitle>
        <FormWrapper
          autoComplete="off"
          className="calculator"
          onSubmit={handleSubmit(onSubmit)}
        >
          <ul>
            <li>
              <SizeLabel>{t("form.mainInfo.size")}</SizeLabel>
              <SizeButtons register={register} />
              <ValidationErrorText inputError={errors.size} />
            </li>
            <InputItem>
              <AddressAutocomplete
                control={control}
                setValue={setValue}
                name={"senderAddress"}
                placeholder="From"
              />
              <ValidationErrorText inputError={errors.senderAddress} />
            </InputItem>
            <InputItem>
              <AddressAutocomplete
                control={control}
                setValue={setValue}
                name={"recipientAddress"}
                placeholder="To"
              />
              <ValidationErrorText inputError={errors.recipientAddress} />
            </InputItem>
            <AddressListItem>
              <p>{t("form.preview.distance")}</p>
              <b>{distance} km</b>
            </AddressListItem>
            <AddressListItem className="price">
              <div>
                <p>{t("form.preview.price")}</p>
                <span>{t("form.checkout.VAT")}</span>
              </div>
              {isLoading ? <LoadingSpinner /> : <b>{price} €</b>}
            </AddressListItem>
            <CreatePickUpWrapper>
              <PrimaryBtn type="submit">
                <FiPlusCircle size={26} />
                {t("create-pickup")}
              </PrimaryBtn>
            </CreatePickUpWrapper>
          </ul>
        </FormWrapper>
      </Container>
    </Section>
  );
};
