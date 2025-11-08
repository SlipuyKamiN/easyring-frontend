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
import { CreatePickUpWrapper, HeroMainBtn } from "../Common/Button.styled";

export const Calculator = () => {
  const { t } = useTranslation();
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { control, setValue, register, watch, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      size: "S",
      sender: "",
      recipient: "",
    },
  });

  const [sender, recipient] = watch(["sender", "recipient"]);

  useEffect(() => {
    if (sender && recipient) {
      setIsLoading(true);
      calculateDistance({ address: sender }, { address: recipient }).then(
        (distance) => {
          setDistance(distance);
          setIsLoading(false);

          const size = getValues("size");
          setPrice(calculatePrice(distance, size));
        }
      );
    }
  }, [sender, recipient, getValues]);

  const size = watch("size");
  useEffect(() => {
    setPrice(calculatePrice(distance, size));
  }, [size, distance]);

  return (
    <Section>
      <Container>
        <SectionTitle>{t("price-calculator")}</SectionTitle>
        <FormWrapper autoComplete="off" className="calculator">
          <ul>
            <li>
              <SizeLabel>{t("form.mainInfo.size")}</SizeLabel>
              <SizeButtons register={register} />
            </li>
            <InputItem>
              <AddressAutocomplete
                control={control}
                setValue={setValue}
                name={"sender"}
                placeholder="From"
              />
            </InputItem>
            <InputItem>
              <AddressAutocomplete
                control={control}
                setValue={setValue}
                name={"recipient"}
                placeholder="To"
              />
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
              <HeroMainBtn
                className="plausible-event-name=create-pickup-calculator"
                to={"createorder/maininfo"}
              >
                {t("create-pickup")}
              </HeroMainBtn>
            </CreatePickUpWrapper>
          </ul>
        </FormWrapper>
      </Container>
    </Section>
  );
};
