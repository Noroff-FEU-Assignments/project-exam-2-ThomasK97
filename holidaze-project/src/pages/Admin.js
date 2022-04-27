import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import AdminLogout from '../components/admin/AdminLogout'






function Admin() {
  return (<>

  
  <Hero hero="hotelsHero">
  

      <Banner>

       <h1>Admin</h1>

       <AdminLogout/>
    
       

       
       </Banner>

       
       
   </Hero>
 

    
    <Footer/>
  
    </>

  )
}

export default Admin