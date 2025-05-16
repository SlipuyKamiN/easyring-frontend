import * as yup from "yup";

export const mainInfoSchema = yup.object().shape({
  size: yup
    .string()
    .oneOf(["S", "M", "L"], "Size must be one of:  S, M or L")
    .required("Size is required"),

  date: yup
    .date()
    .typeError("Please select the delivery date")
    .required("Please select the delivery date"),

  startTime: yup
    .date()
    .required("Please provide the delivery time window")
    .typeError("Please provide the delivery time window"),

  endTime: yup
    .date()
    .required("Please provide the delivery time window")
    .typeError("Please provide the delivery time window"),

  description: yup.string().required("Please provide the parcel description"),
});
