import React, { Component } from 'react'
import Title from './Title'
import { FaHamburger, FaCocktail, FaTaxi, FaHotel, FaBus, FaTram, FaSubway } from 'react-icons/fa'

export default class Info extends Component {
  state={
    info:[
     
      {
        icon:<FaTaxi/>,
        icon2:<FaBus/>,
        title: "Transport",
        description: "Multiple choices of transport opportunities.",
        
      },
      {
        icon:<FaTram/>,
        icon3:<FaSubway/>,
        title: "Attractions",
        description: "Discover amazing attractions like Fløyen and Ulrikken.",
        
      },
      
      {
        icon:<FaCocktail/>,
        title: "Nightlife",
        description: "Explore the nightlife in Bergen.",
        
      },
      {
        icon:<FaHamburger/>,
        title: "Restaurants",
        description: "Get yourself a tasty bite throughout Bergen City.",
        
      },
 
        
    
     
     
     
    ]
     
      
  }
  render() {
    return (
      
        <section className="info-section">
          <Title title='Explore'/>
          <br/>
        <br/>
        <br/>
          <div className="info-center">
            {this.state.info.map((item,index) => {
              return <article key={index} className="info">
                <span>{item.icon}</span>
                <span>{item.icon2}</span>
                <span>{item.icon3}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>

            })}

          </div>
          
          
      </section>
    )
  }
}
