import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Info from "../components/Info";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="book your next Holidaze">
          <Link to="/hotels" className="button-prime">
            Find Hotels
          </Link>
        </Banner>
      </Hero>
      <br/>
     <Featured/>
    
      
      <Info />
      <br/>
      <br/>
      <br/>

      <Footer/>
      
      
    </>
  );
};

export default Home;
