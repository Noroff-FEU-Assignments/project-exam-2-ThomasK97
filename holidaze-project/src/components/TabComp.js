import React from "react";

import { Accordion } from "react-bootstrap";
import AddHotel from "./admin/AddHotel";
import EditBooking from "./admin/AddHotel";
import ListBookings from "./admin/ListBookings";
import ListMessages from "./admin/ListMessage";
import Booking from "./forms/BookingComp";
import DeleteHotels from "./admin/DeleteHotels";

function TabComp() {
  return (
    <div>
       
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="">
          <Accordion.Header>Messages</Accordion.Header>
          <Accordion.Body>
            <ListMessages />
          </Accordion.Body>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Bookings</Accordion.Header>
          <Accordion.Body>
              <ListBookings/>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header> Add Hotel</Accordion.Header>
          <Accordion.Body>
            <AddHotel />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header> Hotels</Accordion.Header>
          <Accordion.Body>
              <DeleteHotels/>
            
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TabComp;
