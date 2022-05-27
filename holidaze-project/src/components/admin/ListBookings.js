import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { BOOKINGS_PATH } from "../../utils/Api";
import useAxios from "../../hooks/axios";
import { useContext } from "react";
import useToggle from "../../hooks/toggle";

const ListBookings = () => {
  const [isTriggered, setIsTriggered] = useToggle();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [auth] = useContext(AuthContext);
  const http = useAxios();

  const [bookings, setBookings] = useState([]);
  const fetchData = async () => {
    const data = await http.get(BOOKINGS_PATH);
    setBookings(data.data.data);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  const deleteItem = (id) => {
    http.delete(BOOKINGS_PATH + "/" + id);
  };
  return (
    <div className="hotel-container">
      {bookings.map((booking, idx) => (
        <div className="card" key={idx}>
          <h3>{booking.attributes.name}</h3>

          <p>Date:{booking.attributes.date}</p>
          <p>Checkout:{booking.attributes.date}</p>
          <button className="button-prime" 
            onClick={() => {
              deleteItem(booking.id);
              setTimeout(() => {
                fetchData();
              }, 300);
            }}
          > Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListBookings;
