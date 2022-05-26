import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Info from "../components/infoTitle/Info";
import Featured from "../components/featured/Featured";
import Footer from "../components/Footer";
import ListHotels from "../components/ListHotels";

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
      <br />
      <br />
      <Featured />

      <br />
      <br />
      <br />

      <Info />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
};

export default Home;
