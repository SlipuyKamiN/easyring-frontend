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

export const Success = ({ data }) => {
  const [updatePayment] = useUpdatePaymentMutation();
  const navigate = useNavigate();

  const selectPaymentType = (paymentType) => {
    const handleDispatch = (body) => {
      updatePayment({ id: data._id, body })
        .then(() => navigate(`/tracking/${data._id}`))
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

  return (
    <>
      <SuccessHeading>
        <CiBookmarkCheck size={50} />
        <h2>Success!</h2>
      </SuccessHeading>
      <SuccessText>
        The courier will arrive
        <br />
        <b>
          between {format(data.mainInfo.startTime, "HH:mm")} and{" "}
          {format(data.mainInfo.endTime, "HH:mm")}.
        </b>
        <br />
        Please stay available during this time. You’ll also receive a
        confirmation email.
      </SuccessText>
      <PaymentOptionsList>
        <PaymentOption>
          <PrimaryBtn
            onClick={() => {
              selectPaymentType("online");
            }}
          >
            <span>Pay now</span>
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
            <span>Pay later</span>
            <span>
              <GiReceiveMoney size={35} />
            </span>
          </PrimaryBtn>
        </PaymentOption>
      </PaymentOptionsList>
    </>
  );
};
