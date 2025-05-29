import { formatISO } from "date-fns";
import { PrimaryBtn } from "../Common/Button.styled";
import { useUpdateTrackingMutation } from "~/Redux/parcelsSlice";

export const ConfirmStatusBtn = ({ parcel }) => {
  const [updateTracking] = useUpdateTrackingMutation();
  const isDriver = parcel.driver._id;
  const isConfirmed = parcel.tracking.history.find(
    ({ status }) => status === 200
  );

  return (
    <li>
      <PrimaryBtn
        disabled={!isDriver || isConfirmed}
        onClick={() => {
          updateTracking({
            _id: parcel._id,
            body: {
              statusName: "Confirmed",
              status: 200,
              date: formatISO(new Date()),
            },
          });
        }}
      >
        {isConfirmed ? "Confirmed" : "Confirm"}
      </PrimaryBtn>
    </li>
  );
};
