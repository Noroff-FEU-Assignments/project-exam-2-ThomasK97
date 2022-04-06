import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { FaBus } from 'react-icons/fa'
import LoginComponent from '../components/LoginComponent'
import Banner from '../components/Banner'


export const Login = () => {
  return ( <>
    <Hero hero="hotelsHero">
      <Banner>
      <h1>Login</h1>
      <LoginComponent/>
        
        </Banner>
    </Hero>
    <Footer/>
    </>
  )
}
