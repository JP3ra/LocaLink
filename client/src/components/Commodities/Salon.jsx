import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Commodities/Salon.css";

function Salon() {
  const [Salon, setSalon] = useState([]);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [sex, setSex] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/salonget");
        console.log("Response:", response);
        setSalon(response.data);
      } catch (err) {
        console.error("Error:", err);
        setError("An error occurred while fetching data.");
      }
    };
    fetchData();
  }, []);

  const filteredSalon = Salon.filter(
    (SalonItem) => SalonItem.location == selectedLocation && SalonItem.sex == sex
  );

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const updateSalon = async (id) => {
    const newLocation = prompt("Enter the new location");
    if (newLocation) {
      try {
        const response = await axios.put("http://localhost:3001/salonupdate", {
          newLocation: newLocation,
          id: id,
        });
  
        // Check the response from the server and update the state accordingly
        if (response.data === "updated") {
          // Find the updated salon in the state and update its location
          const updatedSalon = Salon.map((salonItem) => {
            if (salonItem._id === id) {
              return { ...salonItem, location: newLocation };
            }
            return salonItem;
          });
  
          // Update the state with the new salon data
          setSalon(updatedSalon);
        }
      } catch (error) {
        console.error("Error updating salon:", error);
      }
    }
  };
  

  const deleteRest = async (id) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3001/deletesalon/${id}`
        );

        if (response.data === "deleted") {
          const updatedSalon = Salon.filter(
            (Salon) => Salon._id !== id
          );
          setSalon(updateSalon);
          alert("Salon deleted successfully");
        } else {
          alert("Failed to delete Salon");
        }
      } catch (error) {
        console.error("Error deleting restaurant:", error);
        alert("An error occurred while deleting the restaurant");
      }
    }
  };

  return (
    <div>
      <h1 className="restheading">Salon</h1>
      <div className="option">
        <select
          name="location"
          id="location"
          onChange={handleLocationChange}
          className="location"
        >
          <option value="">Select Location</option>
          <option value="JP Nagar ">JP Nagar</option>
          <option value="Indiranagar">Indiranagar</option>
        </select>

        <select name="sex" id="sex" className="sex" onChange={handleSexChange}>
          <option value="Unisex">Unisex</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>

      {error && <p>{error}</p>}

      <div class="card1">
        {filteredSalon.map((SalonItem) => (
          <div key={SalonItem._id} className="content1">
            <span class="title">Company name: {SalonItem.companyname}</span>

            <p class="desc1">
              <p>
                <b>Sex: </b>
                {SalonItem.sex}
              </p>
              <p>
                <b>Location: </b>
                {SalonItem.location}
              </p>
              <p>
                <b>Pricerange: </b>
                {SalonItem.pricerange}
              </p>
              <p>
                <b>Contact: </b>
                {SalonItem.contact}
              </p>
              <p>
                <b>Rating: </b>
                {SalonItem.rating}
              </p>
            </p>
            <div className="button">
              <button
                className="update"
                onClick={() => updateSalon(SalonItem._id)}
              >
                Update
              </button>
              <button
                className="delete"
                onClick={() => deleteRest(SalonItem._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Salon;
