import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  media  from '../media/bryggen1.jpg';

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
        {hotels.map((hotel, idx) => (
          <div className='card' key={idx}>
              <h3>{hotel.attributes.name}</h3>
            <img src={hotel.attributes.image}/>
            <br/>
            <br/>
            
            <button className="button-prime">
            <Link to={`../hotels/${hotel.id}`}>View</Link>
            </button>
            
          </div>
        ))}
      </div>
    </div>
    
  );
};
export default FeaturedHotels;