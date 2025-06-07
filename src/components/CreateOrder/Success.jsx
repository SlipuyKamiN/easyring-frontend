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
import { notification } from "../Common/notification";
import { LoadingSpinner } from "../Common/LoadingSection";

export const Success = ({ data }) => {
  const { t } = useTranslation();
  const { _id, mainInfo } = data;
  const [dispatchPayment, { isLoading }] = useUpdatePaymentMutation();
  const navigate = useNavigate();

  const selectPaymentType = (paymentType) => {
    const updatePayment = (body) => {
      dispatchPayment({ _id, body })
        .then(() => navigate(`/tracking/${_id}`))
        .catch((e) => notification(e.data.message));
    };

    switch (paymentType) {
      case "online":
        updatePayment({ type: "online", isPaid: true });
        break;

      default:
        updatePayment({ type: "cash", isPaid: false });
        break;
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <SuccessHeading>
        {isLoading ? (
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
            disabled={isLoading}
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
            disabled={isLoading}
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
