import { useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { useGetAllUsersQuery } from "~/Redux/authSlice";
import { useUpdateDriverMutation } from "~/Redux/parcelsSlice";
import { notification } from "../Common/notification";
import { SelectWrapper } from "./Filter.styled";

export const SelectDriver = ({ parcel, status }) => {
  const { data } = useGetAllUsersQuery();

  const [updateDriver] = useUpdateDriverMutation();
  const [selectedDriver, setSelectedDriver] = useState(null);

  const driversOptions = useMemo(() => {
    if (!data?.users) return [];
    return data.users.map(({ _id, name }) => ({
      value: { _id, name },
      label: name,
    }));
  }, [data]);

  useEffect(() => {
    if (driversOptions.length && parcel.driver?._id) {
      const found = driversOptions.find(
        ({ value }) => value._id === parcel.driver._id
      );
      setSelectedDriver(found || null);
    }
  }, [driversOptions, parcel.driver._id]);

  const handleDriverChange = (e) => {
    setSelectedDriver(e);
    updateDriver({ _id: parcel._id, body: e.value }).catch((e) =>
      notification(e.message)
    );
  };

  return (
    <li>
      <SelectWrapper>
        <Select
          isDisabled={status >= 200}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Select driver"
          value={selectedDriver}
          onChange={handleDriverChange}
          isClearable={true}
          options={driversOptions}
        />
      </SelectWrapper>
    </li>
  );
};
