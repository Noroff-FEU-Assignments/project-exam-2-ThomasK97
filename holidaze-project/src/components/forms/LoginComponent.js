import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userLoginSchema } from "../../utils/yupSchemas";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { AUTH_URL, BASE_URL } from "../../utils/Api";
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

  const loginSubmit = (formData) => {
    console.log("Form Data: ", formData);
    loginUser(formData).catch(console.error);
    console.log("auth: ", auth);
  };

  return (
    <>
      <div>
        <div className="contact-title">
          <h1>Login</h1>
        </div>

        <div class="form-container">
          <form onSubmit={handleSubmit(loginSubmit)} className="booking-form">
            <input
              {...register("email")}
              id="email"
              className="form-field"
              type="text"
              placeholder="Enter Your Email"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <br />

            <input
              {...register("password")}
              id="password"
              className="form-field"
              type="password"
              placeholder="Enter Your Password"
            />
            {errors.password && <span>{errors.password.message}</span>}

            <button className="form-field" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
