import * as yup from "yup";

export const trackingIDSchema = yup.object().shape({
  trackingID: yup
    .string()
    .matches(/^(MM|MX|ML)\d{8}$/, "Parcel ID contains 2 letters and 8 digits.")
    .max(10)
    .required("Size is required"),
});
