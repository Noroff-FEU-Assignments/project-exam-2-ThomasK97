import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const FeaturedHotels = () => {
  const [hotels, setHotels] = useState([]);
useEffect(() => {
  fetchHotels();
}, []);
const fetchHotels = () => {
  axios
    .get('https://thomas-holidaze.herokuapp.com/api/hotels')
    .then((res) => {
      console.log(res);
      setHotels(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return (

    <div>
     
      <div className='hotel-container'>
        {hotels.map((hotel) => (
          <div className='card' key={hotel.attributes.id}>
              <h3>{hotel.attributes.name}</h3>
            <img src={hotel.attributes.image} alt='' />
            
            <button className="button-prime">
            <Link to={`/hotelrooms/${hotel.id}`}>View</Link>
            </button>
            
          </div>
        ))}
      </div>
    </div>
    
  );
};
export default FeaturedHotels;