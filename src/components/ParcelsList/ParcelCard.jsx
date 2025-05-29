import { format } from "date-fns";
import { Link } from "react-router-dom";
import { Card } from "./ParcelCard.styled";
import { useGetAllUsersQuery } from "~/Redux/authSlice";
import Select from "react-select";
import { useUpdateDriverMutation } from "~/Redux/parcelsSlice";

export const ParcelCard = ({
  parcel: { _id, mainInfo, sender, recipient, payment, driver },
}) => {
  const { startTime, endTime } = mainInfo;
  const { data } = useGetAllUsersQuery();
  const [updateDriver] = useUpdateDriverMutation();

  const driversOptions = [];

  if (data?.users) {
    data.users.map(({ _id, name }) =>
      driversOptions.push({
        value: { name, _id },
        label: name,
      })
    );
  }

  return (
    <Card>
      <Link to={`/tracking/${_id}`}>
        <h3>{_id}</h3>
        <h2>
          {format(startTime, "HH:mm")}-{format(endTime, "HH:mm")}
        </h2>
      </Link>
      <ul>
        <li>
          <p>Sender: {sender.name}</p>
        </li>
        <li>
          <p>Recipient: {recipient.name}</p>
        </li>
        <li>Is paid: {payment.isPaid.toString()}</li>
        <li>
          <Select
            defaultValue={driversOptions.find(({ value }) => {
              if (value._id === driver.id) return value;
            })}
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder="Select driver"
            onChange={(e) => updateDriver({ id: _id, body: e.value })}
            isClearable={true}
            options={driversOptions}
          />
        </li>
      </ul>
      <ul>
        <li>
          <button>Picked up</button>
        </li>
        <li>
          <button>Delivered</button>
        </li>
      </ul>
    </Card>
  );
};
