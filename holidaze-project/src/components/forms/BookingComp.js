import useAxios from "../../hooks/axios";
import { BOOKINGS_PATH } from "../../utils/Api";
import { bookingSchema } from "../../utils/yupSchemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Booking = () => {
  const http = useAxios();

  const bookingSend = async (bookingData) => {
    const options = {
      data: {
        name: bookingData.name,
        date: bookingData.date,
      },
    };
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

  return (
    <div class="form-container">
      <form onSubmit={handleSubmit(bookingSend)} class="booking-form">
        <input
          {...register("name")}
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
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

        <button className="form-field" type="submit">
          Book
        </button>
      </form>
    </div>
  );
};

export default Booking;
