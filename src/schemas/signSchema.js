import * as yup from "yup";
import {
  emailRegexp,
  passwordRegexp,
  carNumberRegexp,
  phoneRegexp,
  loginRegexp,
} from "./regexs";

export const signInSchema = yup.object().shape({
  login: yup
    .string()
    .matches(
      loginRegexp,
      "Login should be your surname and first letter of name e.g. [surname.n] in lowercase"
    )
    .min(3, "Login must be at least 3 characters")
    .max(30, "Login must be at most 30 characters")
    .required("Login is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password cannot be longer than 16 characters")
    .matches(
      passwordRegexp,
      "Password must include at least 1 uppercase, 1 lowercase and 1 digit"
    )
    .required("Password is required"),
});

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name must be at most 30 characters")
    .required("Name is required"),

  login: yup
    .string()
    .matches(
      loginRegexp,
      "Login should be your surname and first letter of name e.g. [surname.n] in lowercase"
    )
    .min(3, "Login must be at least 3 characters")
    .max(30, "Login must be at most 30 characters")
    .required("Login is required"),

  phone: yup
    .string()
    .matches(
      phoneRegexp,
      "Phone must be a valid German mobile number in international format (+49...)"
    )
    .required("Phone is required"),

  email: yup
    .string()
    .email("Invalid email")
    .matches(emailRegexp, "Invalid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password cannot be longer than 16 characters")
    .matches(
      passwordRegexp,
      "Password must include at least 1 uppercase, 1 lowercase and 1 digit"
    )
    .required("Password is required"),

  carNumber: yup
    .string()
    .matches(
      carNumberRegexp,
      "Car number must be a valid German license plate (e.g. MCE4007E)"
    )
    .required("Car number is required"),
});
