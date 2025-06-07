import { formatISO } from "date-fns";
import { PrimaryBtn } from "../Common/Button.styled";
import { useUpdateTrackingMutation } from "~/Redux/parcelsSlice";
import { LoadingSpinner } from "../Common/LoadingSection";

export const ConfirmStatusBtn = ({ parcel, status }) => {
  const [updateTracking, { isLoading }] = useUpdateTrackingMutation();
  const isDriver = parcel.driver._id;
  const isConfirmed = status >= 200;

  return (
    <li>
      <PrimaryBtn
        disabled={!isDriver || isConfirmed || isLoading}
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
        {isConfirmed ? "Confirmed" : isLoading ? <LoadingSpinner /> : "Confirm"}
      </PrimaryBtn>
    </li>
  );
};
