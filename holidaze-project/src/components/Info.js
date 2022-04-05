import React, { Component } from 'react'
import Title from './Title'
import { FaHamburger, FaCocktail, FaTaxi, FaHotel, FaBus } from 'react-icons/fa'

export default class Info extends Component {
  state={
    info:[
      {
        icon:<FaHotel/>,
        title: "Hotels",
        description: "Donec at varius libero. Mauris sagittis lectus in enim ullamcorper posuere.",
        
      },
      {
        icon:<FaTaxi/>,
        icon2:<FaBus/>,
        title: "Transport",
        description: "Donec at varius libero. Mauris sagittis lectus in enim ullamcorper posuere.",
        
      },
      {
        icon:<FaCocktail/>,
        title: "Explore The Nightlife",
        description: "Donec at varius libero. Mauris sagittis lectus in enim ullamcorper posuere.",
        
      },
      {
        icon:<FaHamburger/>,
        title: "Various Diners",
        description: "Donec at varius libero. Mauris sagittis lectus in enim ullamcorper posuere.",
        
      }
    ]
     
      
  }
  render() {
    return (
      
        <section className="info-section">
          <Title title='Extra Info'/>
          <div className="info-center">
            {this.state.info.map((item,index) => {
              return <article key={index} className="info">
                <span>{item.icon}</span>
                <span>{item.icon2}</span>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </article>

            })}

          </div>
          
          
      </section>
    )
  }
}
