import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HOTElS_URL } from "../utils/Api";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import {
  FaHamburger,
  FaCar,
  FaCity,
  FaBreadSlice,
  FaDog,
  FaStar,
  FaStarHalf,
  FaCheckCircle,
} from "react-icons/fa";
import Booking from "../components/forms/BookingComp";

function HotelDetail() {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

  if (!id) {
    navigate("/");
  }

  const url = HOTElS_URL + "/" + id;

  useEffect(function () {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          console.log(json.data);
          setHotel(json.data);
        } else {
          setError("An error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }
  const imgs = document.querySelectorAll(".img-select a");
  const imgBtns = [...imgs];
  let imgId = 1;

  imgBtns.forEach((imgItem) => {
    imgItem.addEventListener("click", (event) => {
      event.preventDefault();
      imgId = imgItem.dataset.id;
      slideImage();
    });
  });

  function slideImage() {
    const displayWidth = document.querySelector(
      ".img-showcase img:first-child"
    ).clientWidth;

    document.querySelector(".img-showcase").style.transform = `translateX(${
      -(imgId - 1) * displayWidth
    }px)`;
  }

  window.addEventListener("resize", slideImage);

  return (
    <>
      <div class="cardhotel-wrapper">
        <div class="card-detail">
          <div class="product-imgs">
            <div class="img-display">
              <div class="img-showcase">
                <img src={hotel.attributes.image} />
                <img src={hotel.attributes.imagetwo} />
                <img src={hotel.attributes.imagethree} />
                <img src={hotel.attributes.imagefour} />
              </div>
            </div>
            <div class="img-select">
              <div class="img-item">
                <a href="#" data-id="1">
                  <img src={hotel.attributes.image} />
                </a>
              </div>
              <div class="img-item">
                <a href="#" data-id="2">
                  <img src={hotel.attributes.imagetwo} />
                </a>
              </div>
              <div class="img-item">
                <a href="#" data-id="3">
                  <img src={hotel.attributes.imagethree} />
                </a>
              </div>
              <div class="img-item">
                <a href="#" data-id="4">
                  <img src={hotel.attributes.imagefour} />
                </a>
              </div>
            </div>
          </div>

          <div className="product-content">
            <h2 className="product-title">{hotel.attributes.name}</h2>

            <div className="product-rating">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
              <span>4.7(17)</span>
            </div>
            <div class="info-grid">
              <br />
              <h2>Facilities </h2>

              <ul>
                <li>
                  Free Breakfast <FaBreadSlice />
                   
                </li>
                <li>
                  View <FaCity />
                </li>
                <li>
                  Pet Friendly <FaDog />
                </li>
                <li>
                  Parking <FaCar />
                </li>
                <li>
                  Restaurant <FaHamburger />
                </li>
              </ul>
            </div>

            <div className="product-price">
              <p className="price"> From {hotel.attributes.price} kr</p>
            </div>

            <hr />

            <h2>Description </h2>

            <div class="product-detail">
              <p>{hotel.attributes.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Booking />
      <br />
      <br />

      <Footer />
    </>
  );
}

export default HotelDetail;
