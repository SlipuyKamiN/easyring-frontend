import {
  IconsWrapper,
  PaymentOption,
  PaymentOptionsList,
  SuccessHeading,
  SuccessText,
} from "../CreateOrder/Confirm.styled";
import { PrimaryBtn } from "../Common/Button.styled";
import { FaApplePay, FaCheck, FaGooglePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { format } from "date-fns";
import { CiBookmarkCheck } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { LoadingSpinner } from "../Common/LoadingSection";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { CheckedOverlay } from "../ParcelsList/ParcelCard.styled";

export const Checkout = ({ data, setPaymentType, isLoading }) => {
  const { t } = useTranslation();
  const {
    mainInfo,
    payment: { type, isPaid },
  } = data;

  return (
    <Container>
      <SuccessHeading>
        {!mainInfo ? (
          <LoadingSpinner size={40} />
        ) : (
          <CiBookmarkCheck size={50} />
        )}
        <h2>{t("form.success.title")}</h2>
      </SuccessHeading>
      <SuccessText>
        {t("form.success.info.0")}
        <br />
        <b>
          {t("form.success.info.1", {
            startTime: format(mainInfo.startTime, "HH:mm"),
            endTime: format(mainInfo.endTime, "HH:mm"),
          })}
        </b>
        <br />
        {t("form.success.info.2")}
      </SuccessText>
      <PaymentOptionsList>
        <PaymentOption>
          <PrimaryBtn
            disabled={isLoading || isPaid}
            onClick={() => {
              setPaymentType("stripe");
            }}
          >
            <span>{t("form.success.pay-now")}</span>
            <IconsWrapper>
              <FaApplePay />
              <FaGooglePay />
              <SiVisa />
            </IconsWrapper>
          </PrimaryBtn>
          {type === "stripe" && isPaid && (
            <CheckedOverlay>
              <FaCheck size={90} />
            </CheckedOverlay>
          )}
        </PaymentOption>
        <PaymentOption>
          <PrimaryBtn
            disabled={isLoading || isPaid}
            onClick={() => {
              setPaymentType("cash");
            }}
          >
            <span>{t("form.success.pay-later")}</span>
            <span>
              <GiReceiveMoney size={35} />
            </span>
          </PrimaryBtn>
          {type === "cash" && isPaid && (
            <CheckedOverlay>
              <FaCheck size={90} />
            </CheckedOverlay>
          )}
        </PaymentOption>
      </PaymentOptionsList>
    </Container>
  );
};
