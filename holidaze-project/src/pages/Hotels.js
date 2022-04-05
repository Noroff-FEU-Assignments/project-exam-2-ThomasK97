import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';


export const Hotels = () => {
  return <Hero hero="hotelsHero">
      <Banner title="Our Hotels">
          <Link to='/' className="button-prime">Return Home</Link>

      </Banner>

       
  </Hero>
};


export default Hotels;