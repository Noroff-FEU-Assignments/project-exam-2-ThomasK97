import React, { Component } from 'react'
import ListHotels from '../ListHotels'
import FeaturedTitle from './FeaturedTitle'


export default class Featured extends Component {
  render() {
    return (<>
     <FeaturedTitle title='Favourite Hotels'/>
       
        
       
       
        <section className="featured-section">

            <ListHotels/>
       
      
        </section>
        </>
    )
  }
}
