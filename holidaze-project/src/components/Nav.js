import React, { Component, createContext } from "react";
import logo from "../media/logo2.png";
import { FaAlignJustify } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";



export default class Nav extends Component {
 
  

  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  

  
  render()
  
   {

   
    
    return (
      <div className="navbar">
        <div className="nav-center">
          <div className="nav-header">
              
            <a href="/">
              <img src={logo} />
            </a>
            <button type="button" className="nav-button" onClick={this.handleToggle}>
                <FaAlignJustify className="nav-toggle"/>
            </button>

            </div>
            

        

         
          
          
          <ul className={this.state.isOpen ? "nav-links vissible-nav" : "nav-links"}
          >
            <li>
            <Link to="/"> Home</Link>
            </li>
            <li>
            <Link to="/hotels"> Booking</Link>
            </li>
            <li>
            <Link to="/contact"> Contact</Link>
            </li>
            <li>
            <Link to="/login"> Login</Link>
            </li>
            <li>
            <Link to="/admin"> Admin</Link>
            </li>
            

          </ul>
          
        </div>
        </div>
        
      
    );
  }
}
