import React from 'react'

import { Accordion } from 'react-bootstrap'
import EditBooking from './admin/EditBooking';
import ListMessages from './admin/ListMessage';
import Booking from './BookingComp';
import Contact from './Contact';
function TabComp() {
  return (
    <div>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Messages</Accordion.Header>
    <Accordion.Body> 
      
    <ListMessages/>

     
    </Accordion.Body>
    <Accordion.Body>
       
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Bookings</Accordion.Header>
    <Accordion.Body>
        
       
     
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header> Edit Bookings</Accordion.Header>
    <Accordion.Body>
        <Booking/>
       
     
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    </div>
  )
}

export default TabComp;