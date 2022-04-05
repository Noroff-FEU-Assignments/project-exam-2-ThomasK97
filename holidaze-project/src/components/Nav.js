import React, { Component } from "react";
import logo from "../media/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import {AiOutlineMenu} from "react-icons";


export default class Nav extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
              
            <a href="/">
              <img src={logo} />
            </a>
            <button type="button" className="nav-button" onClick={this.handleToggle}>
                <FaAlignRight className="nav-toggle"/>
            </button>

            </div>
            

        

         
          
          
          <ul className={this.state.isOpen ? "nav-links vissible-nav" : "nav-links"}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/hotels">Hotels</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          
        </div>
        </div>
        
      
    );
  }
}
