import useAxios from "../../hooks/axios";
import { CONTACT_PATH } from "../../utils/Api";
import {
  bookingSchema,
  contactSchema,
  userLoginSchema,
} from "../../utils/yupSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ContactF = () => {
  const http = useAxios();

  const contactSend = async (contactData) => {
    const options = {
      data: {
        name: contactData.name,
        email: contactData.email,
        message: contactData.message,
      },
    };
    alert("Message sent");
    window.location.reload();

    const responseData = await http.post(CONTACT_PATH, options);
    console.log(responseData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  return (
    <div>
      <div className="contact-title">
        <h1>Contact us</h1>
      </div>

      <div class="form-container">
        <form onSubmit={handleSubmit(contactSend)} className="booking-form">
          <input
            {...register("name")}
            id="name"
            className="form-field"
            type="text"
            placeholder="Enter Your Name"
          />
          {errors.name && <span>{errors.name.message}</span>}
          <br />

          <input
            {...register("email")}
            id="email"
            className="form-field"
            type="text"
            placeholder="Enter Your email"
          />
          {errors.email && <span>{errors.email.message}</span>}

          <br />

          <input
            {...register("message")}
            id="message"
            className="form-field"
            type="text"
            placeholder="Enter Your Message"
          />
          {errors.message && <span>{errors.message.message}</span>}

          <button className="form-field" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactF;
