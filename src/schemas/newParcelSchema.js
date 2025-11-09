import * as yup from "yup";

const WORK_START_HOUR = 8;
const WORK_END_HOUR = 20;

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
    .typeError("Please provide the delivery time window")
    .test(
      "working-hours",
      `Start time must be between ${WORK_START_HOUR}:00 and ${WORK_END_HOUR}:00`,
      (value) => {
        if (!value) return true;
        const h = value.getHours();
        return h >= WORK_START_HOUR && h <= WORK_END_HOUR;
      }
    ),

  endTime: yup
    .date()
    .required("Please provide the delivery time window")
    .typeError("Please provide the delivery time window")
    .when("startTime", (startTime, schema) =>
      startTime ? schema.min(startTime, "End must be after start") : schema
    )
    .test(
      "working-hours",
      `End time must be between ${WORK_START_HOUR}:00 and ${WORK_END_HOUR}:00`,
      (value) => {
        if (!value) return true;
        const h = value.getHours();
        const m = value.getMinutes();
        return h >= WORK_START_HOUR && h <= WORK_END_HOUR && !m;
      }
    ),

  description: yup.string().required("Please provide the parcel description"),
});

export const senderSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^\+?[0-9]{10,15}$/,
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

  address: yup
    .object()
    .test(
      "not-empty",
      "Please provide the delivery address",
      (value) => value && Object.keys(value).length > 0
    )
    .required("Please provide the delivery address"),

  email: yup
    .string()
    .email("Invalid email address")
    .test("domain-has-dot", "Email domain must contain a dot", (value) => {
      if (!value) return false;
      const domain = value.split("@")[1];
      return domain && domain.includes(".");
    })
    .required("Email is required"),

  comment: yup.string(),
});

export const recipientSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(
      /^\+?[0-9]{10,15}$/,
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

  address: yup
    .object()
    .test(
      "not-empty",
      "Please provide the delivery address",
      (value) => value && Object.keys(value).length > 0
    )
    .required("Please provide the delivery address"),

  comment: yup.string(),
});

export const newParcelSchema = yup.object().shape({
  mainInfo: yup.object({
    ...mainInfoSchema.fields,
    distance: yup.number().required(),
  }),
  sender: senderSchema,
  recipient: recipientSchema,
  tracking: yup.object({
    history: yup.array().required(),
  }),
  payment: yup.object({
    price: yup.number().required(),
    type: yup.string().oneOf(["cash", "online", null]).nullable(),
    transactionDetails: yup.object().required(),
    isPaid: yup.boolean().required(),
  }),
  driver: yup.object({
    name: yup.string(),
    _id: yup.string(),
  }),
});
