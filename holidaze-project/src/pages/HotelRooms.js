import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { HOTElS_URL } from "../utils/Api";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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

	useEffect(
		function () {
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
		},
		[]
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (
    <>
    <div className='hotel-container' key={hotel}>
      
    <div>
      <img className='hotel-image' src={hotel.attributes.image} alt='' />
    </div>
    <h1 className='title'>{hotel.attributes.name}</h1>
    <div>
      
      <p>{hotel.attributes.description}</p>
      <p>
        <strong>Price:</strong> {hotel.attributes.price}
      </p>
     
    </div>
    <div className='back'>
        <Link to='/'>Back</Link>
      </div>
  </div>
  <Footer/>
  </>
  

	);
}

export default HotelDetail;