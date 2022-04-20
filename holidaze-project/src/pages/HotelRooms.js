import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Hotel = ({ match }) => {
  const [data, setData] = useState([]);
useEffect(() => {
    fetchHotel();
  }, []);
const fetchHotel = () => {
    axios
      .get(
        `https://thomas-holidaze.herokuapp.com/api/hotels?id=${match.params.id}`
      )
      .then((res) => {
        setData(res.data.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
return (
    <div>
      {data.map((hotel) => {
        return (
          <div className='product-container' key={hotel.attributes.id}>
            <div>
            <h3>{hotel.attributes.name}</h3>
              <img className='prod-image' src={hotel.image} alt='' />
            </div>
            <div>
              
              <p>{hotel.description}</p>
              <p>
                <strong>Price:</strong> {hotel.price}
              </p>
            
            </div>
          </div>
        );
      })}
      <div className='back'>
        <Link to='/'>Back</Link>
      </div>
    </div>
  );
};
export default Hotel;