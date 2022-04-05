import React, { Component } from 'react'
import FeaturedTitle from './FeaturedTitle'

export default class Featured extends Component {
  render() {
    return (<>
        <section className="featured-section">
        <FeaturedTitle title='Featured Hotels'/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <div className="featured-center">
            

            <article className="featured-hotels">
                <h4>Hotel</h4>
               
            </article>
            <article className="featured-hotels">
                <h4>Hotel</h4>
             
            </article>
            <article className="featured-hotels">
                <h4>Hotel</h4>
              
            </article>
            <article className="featured-hotels">
                <h4>Hotel</h4>
                
            </article>

        </div>
        </section>
        </>
    )
  }
}
