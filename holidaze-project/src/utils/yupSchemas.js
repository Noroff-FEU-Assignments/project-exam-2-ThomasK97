import * as yup from "yup";

export const userLoginSchema = yup.object().shape({
  email: yup.string().required("Please enter your email adress"),
  password: yup.string().required("Please enter your password"),

});

export const bookingSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  date: yup.string().required('Please Enter the checkin date'),
  checkout: yup.string().required('Please Enter the  checkout date'),

 
    
});

export const contactSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  message: yup.string().required('Please Enter Your message'),
  email: yup.string().required('Please Enter Your email'),
  

 
    
});

export const addSchema = yup.object().shape({
  name: yup.string().required('Please enter your name'),
  image: yup.string().required('Enter the img url'),
  description: yup.string().required('Enter the description'),
  price: yup.string().required('Enter the price')
});
 
 