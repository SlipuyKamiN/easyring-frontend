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

export const Joystick = ({ parcel, status }) => {
  const { _id, sender, recipient, payment } = parcel;
  const [updateTracking] = useUpdateTrackingMutation();
  const [updatePayment] = useUpdatePaymentMutation();
  const isConfirmed = status >= 200;
  const isPickedUp = status >= 300;
  const isDelivered = status >= 400;

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
          onClick={() => {
            updateTracking({
              _id,
              body: {
                statusName: "Picked up",
                status: 300,
                date: formatISO(new Date()),
              },
            });
          }}
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
            updateTracking({
              _id,
              body: {
                statusName: "Delivered",
                status: 400,
                date: formatISO(new Date()),
              },
            });
          }}
        >
          <FaCheck size={25} />
        </JoyButton>
      </li>
      <PayWrapper>
        <PayButton
          onClick={() =>
            updatePayment({ _id, body: { type: "cash", isPaid: true } })
          }
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
