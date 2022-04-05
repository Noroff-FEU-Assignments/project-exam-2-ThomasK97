import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Info from '../components/Info';
import Footer from '../components/Footer';


export const Hotels = () => {
  return <>
  <Hero hero="hotelsHero">
      <Banner title="Our Hotels">
          <Link to='/' className="button-prime">Return Home</Link>

      </Banner>


       
  </Hero>
  <Footer/>
 
  </>
};


export default Hotels;