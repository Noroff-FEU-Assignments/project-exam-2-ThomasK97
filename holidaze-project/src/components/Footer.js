import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-col">
            <h4>Location</h4>
            <ul>
              <li>
                <a href="">Bergen</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="#">about</a>
              </li>

              <li>
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Business partners</h4>
            <ul>
              <li>
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#">Booking</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <FaFacebookF /> <FaInstagram /> <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
