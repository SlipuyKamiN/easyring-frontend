import { format } from "date-fns";
import {
  Card,
  CardDetailsList,
  DeleteButton,
  CardHeadingWrapper,
  CardLink,
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
  const status = tracking.history[tracking.history.length - 1].status;

  return (
    <Card>
      <CardHeadingWrapper>
        <CardLink to={`/tracking/${_id}`}>
          <h3>{_id}</h3>
          <h2>
            {format(startTime, "HH:mm")} - {format(endTime, "HH:mm")}
          </h2>
          <p>
            <b> {format(date, "dd.MM.yy")}</b>
          </p>
        </CardLink>
        <DeleteButton type="button" onClick={() => deleteParcel(_id)}>
          <RxCrossCircled size={30} />
        </DeleteButton>
      </CardHeadingWrapper>
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
            <b>{statuses[status].toUpperCase()}</b>
          </p>
        </li>
      </CardDetailsList>
      <CardDetailsList>
        <SelectDriver parcel={parcel} status={status} />
        <ConfirmStatusBtn parcel={parcel} status={status} />
      </CardDetailsList>
      <Joystick parcel={parcel} status={status} />
    </Card>
  );
};
