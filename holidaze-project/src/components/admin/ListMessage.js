import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import { CONTACT_PATH } from '../../utils/Api';
import useAxios from '../../hooks/axios';
import { useContext } from 'react';
import useToggle from '../../hooks/toggle';



const ListMessages = () => {

    const [isTriggered, setIsTriggered] = useToggle();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const [auth] = useContext(AuthContext);
    const http = useAxios();
 
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(CONTACT_PATH);
      setMessages(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);
return (

    <div>
     
      <div className='message-container'>
        {messages.map((contacts, idx) => (
          <div className='card' key={idx}>

              <h3>{contacts.attributes.name}</h3>
             
              <h3>Email:{contacts.attributes.email}</h3>
              <p>Message:{contacts.attributes.message}</p>
           

    
            
          </div>
        ))}
      </div>
    </div>
    
  );
};
export default ListMessages;