import React, { useEffect, useState } from "react";
import axios from "axios";

function Household() {
  const [Household, setHousehold] = useState([]);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/houseget");
        console.log("Response:", response);
        setHousehold(response.data);
      } catch (err) {
        console.error("Error:", err);
        setError("An error occurred while fetching data.");
      }
    };
    fetchData();
  }, []);

  const filteredHousehold = Household.filter(
    (HouseholdItem) => HouseholdItem.location == selectedLocation
  );

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const updateHospital = async (id) => {
    const newLocation = prompt("Enter the new location");
    if (newLocation) {
      try {
        const response = await axios.put("http://localhost:3001//hospupdate", {
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
  

  const deleteHospital = async (id) => {
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
      <h1 className="restheading">Household Commodities</h1>
      <div className="option">
        <select
          name="location"
          id="location"
          onChange={handleLocationChange}
          className="location"
        >
          <option value="">Select Location</option>
          <option value="Jayanagar">Jayanagar</option>
          <option value="Indiranagar">Indiranagar</option>
        </select>
      </div>
      {error && <p>{error}</p>}
      <div class="card">
        {filteredHousehold.map((HouseholdItem) => (
          <div key={HouseholdItem._id} className="content">
            <span class="title">Location: {HouseholdItem.location}</span>

            <p class="desc">
              <p>Brand: {HouseholdItem.brand}</p>
              <p>Offering: {HouseholdItem.offering}</p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Household;
