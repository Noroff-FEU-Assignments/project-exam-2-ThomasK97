import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup.string().required("Please enter your email adress"),
  password: yup.string().required("Please enter your password"),

});

export const bookingSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  message: yup.string().required('Please provide a message'),

 
    
});