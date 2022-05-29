import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                HOLIDAZE is a leading provider of hotel accommodation in Norway,
                Bergen and offering booking services through its own network of
                localised websites. HOLIDAZE gives travellers one of the widest
                selections of accommodation on the net, including both
                independent and major chain hotels as well as self-catering in
                over hundreds of thousands properties. The company offers a
                one-stop shopping source for hotel pricing, amenities and
                availability.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Partners</h6>
              <ul className="footer-links">
                <li>
                  <a href="">Hotels</a>
                </li>
                <li>
                  <a href="">Scandic</a>
                </li>
                <li>
                  <a href="">Booking</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Info</h6>
              <ul className="footer-links">
                <li>
                  <a href="">Contact Us</a>
                </li>

                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12"></div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a className="instagram" href="#">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
