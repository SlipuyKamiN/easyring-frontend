import { formatISO } from "date-fns";
import { getGoogleMapsGetDirections } from "~/helpers/getGoogleMaps";
import {
  useUpdatePaymentMutation,
  useUpdateTrackingMutation,
} from "~/Redux/parcelsSlice";
import {
  JoyButton,
  JoyLink,
  JoyList,
  PayButton,
  PayWrapper,
} from "./Joystick.styled";
import { FaDirections } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { FaFlagCheckered, FaCheck } from "react-icons/fa";
import { statuses } from "~/data/parcelStatuses";
import { notification } from "../Common/notification";

export const Joystick = ({ parcel, status }) => {
  const { _id, sender, recipient, payment } = parcel;
  const [dispatchTracking] = useUpdateTrackingMutation();
  const [dispatchPayment] = useUpdatePaymentMutation();
  const isConfirmed = status >= 200;
  const isPickedUp = status >= 300;
  const isDelivered = status >= 400;

  const updateTracking = (status) => {
    dispatchTracking({
      _id,
      body: {
        statusName: statuses[status],
        status,
        date: formatISO(new Date()),
      },
    })
      .unwrap()
      .then(() => notification(statuses[status].toUpperCase(), "success"))
      .catch((e) => notification(e.message));
  };

  const updatePayment = (body) => {
    dispatchPayment({ _id, body })
      .unwrap()
      .then(() => notification("PAID", "success"))
      .catch((e) => notification(e.message));
  };

  return (
    <JoyList>
      <li>
        <JoyLink
          disabled={!isConfirmed}
          target="_blank"
          rel="noopener nofollow noreferrer"
          href={getGoogleMapsGetDirections(sender.address.properties.formatted)}
        >
          <FaDirections size={25} />
        </JoyLink>
      </li>
      <li>
        <JoyButton
          type="button"
          disabled={!isConfirmed || isPickedUp}
          onClick={() => updateTracking(300)}
        >
          <TbTruckDelivery size={25} />
        </JoyButton>
      </li>
      <li>
        <JoyLink
          disabled={!isConfirmed}
          target="_blank"
          rel="noopener nofollow noreferrer"
          href={getGoogleMapsGetDirections(
            recipient.address.properties.formatted
          )}
        >
          <FaFlagCheckered size={25} />
        </JoyLink>
      </li>
      <li>
        <JoyButton
          type="button"
          disabled={!isPickedUp || isDelivered || !payment.isPaid}
          onClick={() => {
            updateTracking(400);
          }}
        >
          <FaCheck size={25} />
        </JoyButton>
      </li>
      <PayWrapper>
        <PayButton
          onClick={() => updatePayment({ type: "cash", isPaid: true })}
          type="button"
          disabled={!isConfirmed || payment.isPaid}
        >
          {payment.price}
          <span> EUR</span>
        </PayButton>
      </PayWrapper>
    </JoyList>
  );
};
