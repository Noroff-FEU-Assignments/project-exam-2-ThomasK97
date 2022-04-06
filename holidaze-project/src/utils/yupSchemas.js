import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup.string().required("Please enter your email adress"),
  password: yup.string().required("Please enter your password"),
});