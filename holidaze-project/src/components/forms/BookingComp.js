import useAxios from "../../hooks/axios";
import { BOOKINGS_PATH, HOTElS_URL } from "../../utils/Api";
import { bookingSchema } from "../../utils/yupSchemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const Booking = () => {
  const http = useAxios();

  const bookingSend = async (bookingData) => {
    const options = {
      data: {
        name: bookingData.name,
        date: bookingData.date,
        checkout: bookingData.checkout,
        hotel: bookingData.hotel,
      },
    };
    alert("Hotel Booked");
    window.location.reload();
    const responseData = await http.post(BOOKINGS_PATH, options);
    console.log(responseData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const { id } = useParams();

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

  return (
    <>
      <div class="form-container">
        <form onSubmit={handleSubmit(bookingSend)} className="booking-form">
          <input
            {...register("hotel")}
            id="hotel"
            className="form-field"
            type="text"
            value={hotel.attributes.name}
          />
          <input
            {...register("name")}
            id="first-name"
            className="form-field"
            type="text"
            placeholder="Enter Your Name"
          />
          {errors.name && <span>{errors.name.message}</span>}

          <br />

          <h3>Date from/To</h3>

          <input
            {...register("date")}
            id="date-from"
            className="form-field"
            type="date"
            placeholder="date"
          />
          {errors.date && <span>{errors.date.message}</span>}

          <input
            {...register("checkout")}
            id="date-to"
            className="form-field"
            type="date"
            placeholder="date"
          />
          {errors.date && <span>{errors.checkout.message}</span>}

          <button className="form-field" type="submit">
            Book
          </button>
        </form>
      </div>
    </>
  );
};

export default Booking;
