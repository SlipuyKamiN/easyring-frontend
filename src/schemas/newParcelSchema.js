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

export const senderSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^\+?[0-9]+$/,
      'Phone number must contain digits and start with "+"'
    )
    .required("Phone number is required"),

  name: yup
    .string()
    .matches(
      /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+(?: [A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+)$/,
      "Name must contain first and last name using only letters"
    )
    .required("Name is required"),

  address: yup.object().required("Please provide the pick-up address"),

  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),

  comment: yup.string(),
});

export const recipientSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^\+?[0-9]+$/,
      'Phone number must contain digits and start with "+"'
    )
    .required("Phone number is required"),

  name: yup
    .string()
    .matches(
      /^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+(?: [A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+)$/,
      "Name must contain first and last name using only letters"
    )
    .required("Name is required"),

  address: yup.object().required("Please provide the delivery address"),

  comment: yup.string(),
});
