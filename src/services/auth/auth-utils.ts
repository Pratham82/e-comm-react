/* eslint-disable no-nested-ternary */
import { capitalize } from "utils";

export const authState = {
  loginState: {
    email: "",
    password: "",
  },
  signUpState: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  loginErrors: {
    email: "",
    password: "",
  },
  signUpErrors: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
};

export const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

export const validateCredentials = (
  credentials: any,
  initialErrors: any,
  setErrors: any,
) => {
  let flag = false;
  let errors = { ...initialErrors };
  Object.entries(credentials).map(([name, value]: any) => {
    errors = {
      ...errors,
      [name]:
        value === "" || value.length < 1
          ? `${capitalize(name)} cannot be empty`
          : name === "email" && !isValidEmail(value)
          ? "Emails must be valid"
          : name === "password" && value.length < 6
          ? "Password must be at least 6 characters"
          : "",
    };
    return flag;
  });

  flag = Object.values(errors).every((err) => err === "");
  setErrors(errors);

  return flag;
};
