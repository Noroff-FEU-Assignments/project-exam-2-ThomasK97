import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { FaBus } from "react-icons/fa";
import LoginComponent from "../components/forms/LoginComponent";
import Banner from "../components/Banner";

export const Login = () => {
  return (
    <>
      <Hero hero="hotelsHero">
       
         
          <LoginComponent />
     
      </Hero>
      <Footer />
    </>
  );
};
