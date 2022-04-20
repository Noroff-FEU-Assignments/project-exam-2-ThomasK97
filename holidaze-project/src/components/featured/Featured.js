import React, { Component } from 'react'
import ListHotels from '../ListHotels'
import FeaturedTitle from './FeaturedTitle'


export default class Featured extends Component {
  render() {
    return (<>
     <FeaturedTitle title='Featured Hotels'/>
        <br/>
        <br/>
        <br/>
       
        <section className="featured-section">

            <ListHotels/>
       
      
        </section>
        </>
    )
  }
}
