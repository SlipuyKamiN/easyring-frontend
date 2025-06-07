import { format } from "date-fns";
import {
  Card,
  CardDetailsList,
  DeleteButton,
  CardHeadingWrapper,
  CardLink,
  Overlay,
} from "./ParcelCard.styled";
import { SelectDriver } from "./SelectDriver";
import { ConfirmStatusBtn } from "./ConfirmParcelStatus";
import { Joystick } from "./Joystick";
import { RxCrossCircled } from "react-icons/rx";
import { useDeleteParcelMutation } from "~/Redux/parcelsSlice";
import { statuses } from "~/data/parcelStatuses";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { LoadingSpinner } from "../Common/LoadingSection";

export const ParcelCard = ({ parcel, isAdmin }) => {
  const { t } = useTranslation();
  const { _id, mainInfo, sender, recipient, payment, tracking } = parcel;
  const { date, startTime, endTime } = mainInfo;
  const [deleteParcel, { isLoading }] = useDeleteParcelMutation();
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
        {isAdmin && (
          <DeleteButton
            disabled={isLoading}
            type="button"
            onClick={() => deleteParcel(_id)}
          >
            {isLoading ? (
              <LoadingSpinner size={30} />
            ) : (
              <RxCrossCircled size={30} />
            )}
          </DeleteButton>
        )}
      </CardHeadingWrapper>
      <CardDetailsList>
        <li>
          <p>
            {t("form.sender")} <b>{sender.name}</b>
          </p>
        </li>
        <li>
          <p>
            {t("form.recipient")}
            <b> {recipient.name}</b>
          </p>
        </li>
        <li>
          <p>
            {t("form.mainInfo.payment.title")}
            <span className={payment.isPaid ? "paid" : ""}>
              {payment.isPaid
                ? t("form.mainInfo.payment.value.0")
                : t("form.mainInfo.payment.value.1")}
            </span>
          </p>
        </li>
        <li>
          <p>
            {t("tracking.status")}
            <b>{t(`tracking.${statuses[status]}`).toUpperCase()}</b>
          </p>
        </li>
      </CardDetailsList>
      {isAdmin && (
        <CardDetailsList>
          <SelectDriver parcel={parcel} status={status} />
          <ConfirmStatusBtn parcel={parcel} status={status} />
        </CardDetailsList>
      )}
      <Joystick parcel={parcel} status={status} />
      {status === 400 && (
        <Overlay>
          <FaCheck size={90} />
        </Overlay>
      )}
    </Card>
  );
};
