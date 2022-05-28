import useAxios from "../../hooks/axios";
import { BOOKINGS_PATH, HOTElS_URL } from "../../utils/Api";
import { addSchema, bookingSchema } from "../../utils/yupSchemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";

const AddHotel = () => {
  const http = useAxios();

  const addHotel = async (addHotelData) => {
    const options = {
      data: {
        name: addHotelData.name,
        image: addHotelData.image,
        description: addHotelData.description,
        price: addHotelData.price,
      },
    };
    const responseData = await http.post(HOTElS_URL, options);
    console.log(responseData);
  };
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addSchema),
  });


  return (
    <>
      <div class="form-container">
        <form onSubmit={handleSubmit(addHotel)} className="booking-form">
          <input
            {...register("name")}
            id="hotel"
            className="form-field"
            type="text"
            placeholder="Enter Name of Hotel"
          />
          {errors.name && <span>{errors.name.message}</span>}
          <input
            {...register("image")}
            id="first-name"
            className="form-field"
            type="text"
            placeholder="URL img"
          />
          {errors.image && <span>{errors.image.message}</span>}

          <input
            {...register("description")}
            id="description"
            className="form-field"
            type="description"
            placeholder="description"
          />
          {errors.description && <span>{errors.description.message}</span>}

          <input
            {...register("price")}
            id="price"
            className="form-field"
            type="price"
            placeholder="price"
          />
          {errors.price && <span>{errors.price.message}</span>}

          <button className="form-field" type="submit">
            Add Hotel
          </button>
        </form>
      </div>
    </>
  );
};

export default AddHotel;
