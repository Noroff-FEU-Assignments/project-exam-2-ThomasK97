import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "../utils/yupSchemas";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { AUTH_URL, BASE_URL } from "../utils/Api";
import { useNavigate } from "react-router-dom";





const LoginComponent = () => {
    const navigate = useNavigate();
    
  

    const [auth, setAuth] = useContext(AuthContext);
  
    useEffect(() => {
      console.log("auth", auth);
      console.log(AUTH_URL);
    }, []);
  
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(userLoginSchema),
    });
  
    const loginUser = async (formData) => {
      const responseData = await axios.post(AUTH_URL, {
        identifier: formData.email,
        password: formData.password,
      });
      console.log("Response Data:", responseData);
  
      setAuth(responseData.data);
      navigate("/admin");
      
      
    };
  
    const onSubmit = (formData) => {
      console.log("Form Data: ", formData);
      loginUser(formData).catch(console.error);
      console.log("auth: ", auth);
     
    };
  
    return (
      <>
  
     
     
   
        <div className="login-box">
            
        <form onSubmit={handleSubmit(onSubmit)}>
          <input className="login-input" {...register("email")} placeholder="Your email..." />
          <br />
          <br/>
         
          {errors.email && <span> {errors.email.message}</span>}
          
          <br />
          <br/>
          <br/>
          <input className="login-input"
            {...register("password")}
            type="password"
            placeholder="Your password..."
          />
          <br />
          <br />
       
  
        
  
          {errors.password && <span>{errors.password.message}</span>}
  
          <br />
          <br />
          <br/>
   
  
          <button className="button-prime">Login</button>
        </form>
        </div>
      </>
    );
  };
  
  export default LoginComponent;