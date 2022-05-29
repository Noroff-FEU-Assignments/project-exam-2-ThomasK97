import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAxios from '../../hooks/axios';
import { HOTElS_URL } from '../../utils/Api';




const DeleteHotels = () => {
 
  const [hotels, setHotels] = useState([]);
useEffect(() => {
  fetchHotels();
}, []);
const fetchHotels = () => {
  axios
    .get(HOTElS_URL)
    .then((res) => {
      console.log(res);
      setHotels(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
const fetchData = async () => {
    const data = await http.get(HOTElS_URL);
    
   
   
  };
const http = useAxios();
const deleteItem = (id) => {
    if (window.confirm('Are you sure?')){
    http.delete(HOTElS_URL + "/" + id);
    window.location.reload();
    }
  };



return (

    <div>
       
       
      <div className='hotel-container'>
        {hotels.map((hotel, idx) => (
          <div className='card' key={idx}>
              <h3>{hotel.attributes.name}</h3>
            <img src={hotel.attributes.image}/>
            <br/>
            <div className='hotel-price'>
            </div>
           
          
            <button className="button-prime" 
            onClick={() => {
              deleteItem(hotel.id);
              setTimeout(() => {
                fetchData();
              }, 300);
            }}
           
          > Delete</button>
          
          </div>
         
        ))}
      </div>
    </div>

  
    
  );
};
export default DeleteHotels;