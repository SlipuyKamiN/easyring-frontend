import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Checkout } from "~/components/Checkout/Checkout";
import { LoadingSection } from "~/components/Common/LoadingSection";
import { notification } from "~/components/Common/notification";
import { ProgressBar } from "~/components/CreateOrder/ProgressBar";
import {
  useGetParcelByIdQuery,
  useUpdatePaymentMutation,
} from "~/Redux/parcelsSlice";
import {
  useCreateCheckoutMutation,
  useGetSessionQuery,
} from "~/Redux/stripeSlice";
import { ConfirmSection } from "./CreateOrderPage.styled";
import { ConfirmSectionWrapper } from "~/components/CreateOrder/Confirm.styled";
import { Container } from "~/components/SharedLayout/SharedLayout.styled";

const CheckoutPage = () => {
  const { parcelId } = useParams();
  const { data, isLoading } = useGetParcelByIdQuery(parcelId);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams("");
  const [paymentType, setPaymentType] = useState(null);
  const [dispatchPayment, { isLoading: isUpdating }] =
    useUpdatePaymentMutation();
  const [createCheckout, { isLoading: isChekingOut }] =
    useCreateCheckoutMutation();
  const { data: session } = useGetSessionQuery(searchParams.get("session_id"), {
    skip: !searchParams.has("session_id"),
  });

  useEffect(() => {
    if (!data) return;

    if (paymentType === "stripe" && !searchParams.has("session_id")) {
      createCheckout({ _id: data._id, amount: data.payment.price })
        .unwrap()
        .then((res) => (window.location.href = res.url))
        .catch((e) => notification(e.message));
      return;
    }
  }, [data, createCheckout, paymentType, searchParams]);

  useEffect(() => {
    if (!data) return;

    if (
      searchParams.has("session_id") &&
      session?.payment_status === "paid" &&
      session?.status === "complete" &&
      !data.payment.isPaid &&
      !data.payment?.transactionDetails?.id
    ) {
      const body = {
        transactionDetails: session,
        isPaid: true,
        type: "stripe",
      };

      dispatchPayment({ _id: data._id, body })
        .then(() => setSearchParams(""))
        .catch((e) => notification(e.data.message));
    }
  }, [data, dispatchPayment, navigate, searchParams, session, setSearchParams]);

  useEffect(() => {
    if (!data) return;

    if (paymentType === "cash" && paymentType !== data.payment.type) {
      const body = { type: "cash", isPaid: false };

      dispatchPayment({ _id: data._id, body })
        .then(() => {
          navigate(`/tracking/${data._id}`);
        })
        .catch((e) => notification(e.data.message));
      return;
    }
  }, [data, dispatchPayment, navigate, paymentType]);

  if (!data || isLoading) {
    return <LoadingSection />;
  }

  return (
    <>
      <ProgressBar />
      <ConfirmSection>
        <Container>
          <Checkout
            data={data}
            isLoading={isChekingOut || isUpdating}
            setPaymentType={setPaymentType}
            navigate={navigate}
          />
        </Container>
      </ConfirmSection>
    </>
  );
};

export default CheckoutPage;
