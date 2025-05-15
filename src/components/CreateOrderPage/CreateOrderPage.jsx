import { Outlet } from "react-router-dom";
import { ProgressBar } from "./ProgressBar";
import { useState } from "react";

const parcelInfo = {
  mainInfo: {
    size: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  },
  sender: {
    phone: "",
    name: "",
    address: "",
    email: "",
    comment: "",
  },
  recipient: {
    phone: "",
    name: "",
    address: "",
    comment: "",
  },
};

export const CreateOrderPage = () => {
  const [newParcel, setNewParcel] = useState(parcelInfo);

  return (
    <>
      <ProgressBar />
      <Outlet newParcel={newParcel} setNewParcel={setNewParcel} />
    </>
  );
};
