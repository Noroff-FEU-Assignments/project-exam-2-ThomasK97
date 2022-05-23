import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ContactF from '../components/Contact'

export const Contact = () => {
  return (<>
   <Hero hero="contactHero">
   
       
       <Banner>
    <ContactF/>
      
       </Banner>
    
   </Hero>

  
   
   

    
    <Footer/>
    </>
  )
}
