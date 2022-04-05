import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

export const Home = () => {
  return <Hero>
      <Banner title="book your next Holidaze">
          <Link to = '/hotels' className="button-prime">
              Find Hotels 

          </Link>
          </Banner>
  </Hero>;
}

export default Home;

