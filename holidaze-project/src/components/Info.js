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
        description: "Donec at varius libero. Mauris sagittis lectus in enim ullamcorper posuere.",
        
      },
      {
        icon:<FaTram/>,
        icon3:<FaSubway/>,
        title: "Attractions",
        description: "Donec at varius libero. Mauris sagittis lectus in enim ullamcorper posuere.",
        
      },
      
      {
        icon:<FaCocktail/>,
        title: "Nightlife",
        description: "Donec at varius libero. Mauris sagittis lectus in enim ullamcorper posuere.",
        
      },
      {
        icon:<FaHamburger/>,
        title: "Restaurants",
        description: "Donec at varius libero. Mauris sagittis lectus in enim ullamcorper posuere.",
        
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
