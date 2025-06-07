import {
  IconsWrapper,
  PaymentOption,
  PaymentOptionsList,
  SuccessHeading,
  SuccessText,
} from "./Confirm.styled";
import { PrimaryBtn } from "../Common/Button.styled";
import { useUpdatePaymentMutation } from "~/Redux/parcelsSlice";
import { FaApplePay, FaGooglePay } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { CiBookmarkCheck } from "react-icons/ci";
import { useEffect } from "react";
import { scrollToTop } from "~/helpers/scrollToTop";
import { useTranslation } from "react-i18next";

export const Success = ({ data }) => {
  const { t } = useTranslation();
  const { _id, mainInfo } = data;
  const [updatePayment] = useUpdatePaymentMutation();
  const navigate = useNavigate();

  const selectPaymentType = (paymentType) => {
    const handleDispatch = (body) => {
      updatePayment({ _id, body })
        .then(() => navigate(`/tracking/${_id}`))
        .catch(console.log);
    };

    switch (paymentType) {
      case "online":
        handleDispatch({ type: "online", isPaid: true });
        break;

      default:
        handleDispatch({ type: "cash", isPaid: false });
        break;
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <SuccessHeading>
        <CiBookmarkCheck size={50} />
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
            onClick={() => {
              selectPaymentType("online");
            }}
          >
            <span>{t("form.success.pay-now")}</span>
            <IconsWrapper>
              <FaApplePay />
              <FaGooglePay />
              <SiVisa />
            </IconsWrapper>
          </PrimaryBtn>
        </PaymentOption>
        <PaymentOption>
          <PrimaryBtn
            onClick={() => {
              selectPaymentType("cash");
            }}
          >
            <span>{t("form.success.pay-later")}</span>
            <span>
              <GiReceiveMoney size={35} />
            </span>
          </PrimaryBtn>
        </PaymentOption>
      </PaymentOptionsList>
    </>
  );
};
