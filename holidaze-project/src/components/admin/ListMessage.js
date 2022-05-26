import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import { CONTACT_PATH } from "../../utils/Api";
import useAxios from "../../hooks/axios";
import { useContext } from "react";
import useToggle from "../../hooks/toggle";

const ListMessages = () => {
  const [isTriggered, setIsTriggered] = useToggle();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const [auth] = useContext(AuthContext);
  const http = useAxios();

  const [messages, setMessages] = useState([]);
  const fetchData = async () => {
    const data = await http.get(CONTACT_PATH);
    setMessages(data.data.data);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  const deleteItem = (id) => {
    http.delete(CONTACT_PATH + "/" + id);
  };
  return (
    <div className="hotel-container">
      {messages.map((contacts, idx) => (
        <div className="card" key={idx}>
          <h3>{contacts.attributes.name}</h3>

          <p>Email:{contacts.attributes.email}</p>
          <p>Message:{contacts.attributes.message}</p>
          <button className="button-prime" 
            onClick={() => {
              deleteItem(contacts.id);
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

export default ListMessages;
