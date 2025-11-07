import {
  IconsWrapper,
  PaymentOption,
  PaymentOptionsList,
  SuccessHeading,
  SuccessText,
  ToPayWrapper,
} from "./Checkout.styled";
import { PrimaryBtn, SecondaryBtnLink } from "../Common/Button.styled";
import { FaApplePay, FaCheck, FaGooglePay, FaSearch } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { format } from "date-fns";
import { CiBookmarkCheck } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import { LoadingSpinner } from "../Common/LoadingSection";
import { Container } from "../SharedLayout/SharedLayout.styled";
import { CheckedOverlay } from "../ParcelsList/ParcelCard.styled";
import { ConfirmSectionWrapper } from "../CreateOrder/Confirm.styled";

export const Checkout = ({ data, setPaymentType, isLoading, navigate }) => {
  const { t } = useTranslation();
  const {
    _id,
    mainInfo,
    payment: { type, isPaid, price },
  } = data;

  const handleCashClick = () => {
    if (type === "cash") return navigate(`/tracking/${_id}`);
    setPaymentType("cash");
  };

  return (
    <ConfirmSectionWrapper>
      <SuccessHeading>
        {isLoading ? (
          <LoadingSpinner size={40} />
        ) : (
          <CiBookmarkCheck size={50} />
        )}
        <h2>{t("form.checkout.title")}</h2>
      </SuccessHeading>
      <SuccessText>
        {t("form.checkout.info.0")}
        <br />
        <b>
          {t("form.checkout.info.1", {
            startTime: format(mainInfo.startTime, "HH:mm"),
            endTime: format(mainInfo.endTime, "HH:mm"),
          })}
        </b>
        <br />
        {t("form.checkout.info.2")}
      </SuccessText>
      <ToPayWrapper>
        {!isPaid ? (
          <>
            <h3>{t("form.checkout.to-pay", { price })}</h3>
            <p>{t("form.checkout.VAT")}</p>
          </>
        ) : (
          <SecondaryBtnLink to={`/tracking/${_id}`}>
            {t("form.checkout.tracking")}
            <FaSearch size={20} />
          </SecondaryBtnLink>
        )}
      </ToPayWrapper>
      <PaymentOptionsList>
        <PaymentOption>
          <PrimaryBtn
            disabled={isLoading || isPaid}
            onClick={() => {
              setPaymentType("stripe");
            }}
          >
            <span>{t("form.checkout.pay-now")}</span>
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
          <PrimaryBtn disabled={isLoading || isPaid} onClick={handleCashClick}>
            <span>{t("form.checkout.pay-later")}</span>
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
    </ConfirmSectionWrapper>
  );
};
