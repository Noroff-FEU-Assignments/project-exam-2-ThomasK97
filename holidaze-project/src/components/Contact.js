import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/axios';
import {  CONTACT_PATH } from '../utils/Api';
import useToggle from '../hooks/toggle';
import { bookingSchema, userLoginSchema } from '../utils/yupSchemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';






const ContactF = () => {
  const { id } = useParams();
  const http = useAxios();
  const [triggered, setTriggered] = useToggle();


  
  const contactSend = async (contactData) => {
    const options = {
      data: {
        name: contactData.name,
        email: contactData.email,
        message: contactData.message,
       

      },
    };
    const responseData = await http.post(CONTACT_PATH, options);
    console.log(responseData);
    setTriggered();
   
  };

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });
  

  return (
      <div>

    <div className='contact-title'>

        <h2>Contact Us</h2>
        </div>


        <form onSubmit={handleSubmit(contactSend)} className="contact-container">
            <fieldset>
        <input {...register('name')} placeholder='Your Name' className='inputN' />
        {errors.name && <span>{errors.name.message}</span>}
        <br/>
        
        <input {...register('email')} placeholder='Your email' className='inputE' />
        {errors.email && <span>{errors.email.message}</span>}
        <br/>
       

        <input {...register('message')} placeholder='Message' className='inputMessage'/>
        {errors.message && <span>{errors.message.message}</span>}
        <br/>
        <br/>

       

        <button className='button-prime'>Send</button>
        </fieldset>
      </form> 
   
    
      </div>

     

  );
};

export default ContactF;
