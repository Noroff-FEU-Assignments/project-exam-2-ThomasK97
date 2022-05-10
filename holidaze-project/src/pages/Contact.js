import React from 'react'
import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

export const Contact = () => {
  return (<>
   <Hero hero="contactHero">
   
       
       <Banner>
       <ContactForm/>
       </Banner>
    
   </Hero>

  
   
   

    
    <Footer/>
    </>
  )
}
