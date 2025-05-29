import { format } from "date-fns";
import { Link } from "react-router-dom";
import {
  Card,
  CardDetailsList,
  DeleteButton,
  HeadingWrapper,
  TrackingLink,
} from "./ParcelCard.styled";
import { SelectDriver } from "./SelectDriver";
import { ConfirmStatusBtn } from "./ConfirmParcelStatus";
import { Joystick } from "./Joystick";
import { RxCrossCircled } from "react-icons/rx";
import { useDeleteParcelMutation } from "~/Redux/parcelsSlice";
import { statuses } from "~/data/parcelStatuses";

export const ParcelCard = ({ parcel }) => {
  const { _id, mainInfo, sender, recipient, payment, tracking } = parcel;
  const { date, startTime, endTime } = mainInfo;
  const [deleteParcel] = useDeleteParcelMutation();
  const parcelStatus = tracking.history[tracking.history.length - 1].status;

  console.log();

  return (
    <Card>
      <HeadingWrapper>
        <TrackingLink to={`/tracking/${_id}`}>
          <h3>{_id}</h3>
          <h2>
            {format(startTime, "HH:mm")} - {format(endTime, "HH:mm")}
          </h2>
          <p>
            <b> {format(date, "dd.MM.yy")}</b>
          </p>
        </TrackingLink>
        <DeleteButton type="button" onClick={() => deleteParcel(_id)}>
          <RxCrossCircled size={30} />
        </DeleteButton>
      </HeadingWrapper>
      <CardDetailsList>
        <li>
          <p>
            Sender: <b>{sender.name}</b>
          </p>
        </li>
        <li>
          <p>
            Recipient:<b> {recipient.name}</b>
          </p>
        </li>
        <li>
          <p>
            Is paid:
            <span className={payment.isPaid ? "paid" : ""}>
              {payment.isPaid ? "PAID" : "NOT PAID"}
            </span>
          </p>
        </li>
        <li>
          <p>
            Status:
            <b>{statuses[parcelStatus].toUpperCase()}</b>
          </p>
        </li>
      </CardDetailsList>
      <CardDetailsList>
        <SelectDriver parcel={parcel} />
        <ConfirmStatusBtn parcel={parcel} />
      </CardDetailsList>
      <Joystick parcel={parcel} />
    </Card>
  );
};
