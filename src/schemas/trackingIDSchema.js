import * as yup from "yup";

export const trackingIDSchema = yup.object().shape({
  trackingID: yup
    .string()
    .matches(/^(MM|MX|ML)\d{8}$/, "Starts with MX/MM/ML and 8 digits.")
    .max(10)
    .required("Parcel ID is required"),
});
