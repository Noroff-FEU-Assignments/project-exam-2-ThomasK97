import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Info from "../components/infoTitle/Info";
import Footer from "../components/Footer";
import FeaturedHotels from "../components/ListHotels";
import { FaSearch } from "react-icons/fa";

export const Hotels = () => {
  return (
    <>
      <Hero hero="hotelsHero">
        <Banner title="Our Hotels">
          <Link to="/" className="button-prime">
            Return Home
          </Link>
        </Banner>
      </Hero>

      <br />

      <div className="search-bar">
        <input type="text" placeholder="Search for your hotel"></input>
      </div>
      <FeaturedHotels />

      <Footer />
    </>
  );
};

export default Hotels;
