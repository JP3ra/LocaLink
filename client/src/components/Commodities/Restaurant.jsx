import React, { useEffect, useState } from "react";
import "../Commodities/Restaurant.css";
import axios from "axios";

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(""); 
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectRating, setSelectedRating] = useState("");
  const [ownernum, setOwnernum] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/restget");
        console.log("Response:", response);
        setRestaurants(response.data);
      } catch (err) {
        console.error("Error:", err);
        setError("An error occurred while fetching data.");
      }
    };

    fetchData();
  }, []);

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.location === selectedLocation &&
      restaurant.cuisine.includes(selectedCuisine)
  );

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleCuisineChange = (event) => {
    setSelectedCuisine(event.target.value);
  };

  const handleRatingChange = (event) => {
    setSelectedRating(event.target.value);
  };

  const updateRest = async (id) => {
    const newLocation = prompt("Enter the new location");
    if (newLocation) {
      try {
        const response = await axios.put("http://localhost:3001/restupdate", {
          newLocation: newLocation,
          id: id,
        });

        
        if (response.data === "updated") {

          const updatedRestaurants = restaurants.map((restaurant) => {
            if (restaurant._id === id) {
              return { ...restaurant, location: newLocation };
            }
            return restaurant;
          });

       
          setRestaurants(updatedRestaurants);
        }
      } catch (error) {
        console.error("Error updating restaurant:", error);
      }
    }
  };

  const deleteRest = async (id) => {
    if (window.confirm("Are you sure you want to delete this restaurant?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3001/deleteres/${id}`
        );

        if (response.data === "deleted") {
          const updatedRestaurants = restaurants.filter(
            (restaurant) => restaurant._id !== id
          );
          setRestaurants(updatedRestaurants);
          alert("Restaurant deleted successfully");
        } else {
          alert("Failed to delete restaurant");
        }
      } catch (error) {
        console.error("Error deleting restaurant:", error);
        alert("An error occurred while deleting the restaurant");
      }
    }
  };

  return (
    <div>
      <h1 className="restheading">Restaurants</h1>
      <div className="option">
        <select
          name="location"
          id="location"
          onChange={handleLocationChange}
          className="location"
        >
          <option value="">Select Location</option>
          <option value="Banashankari">Banashankari</option>
          <option value="Indiranagar">Indiranagar</option>
          <option value="Bannerghatta Road">Bannerghatta Road</option>
          <option value="Church Street ">Church Street</option>
        </select>

        <select
          name="cuisine"
          id="cuisine"
          onChange={handleCuisineChange}
          className="cuisine"
        >
          <option value="">Select Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Continental">Continental</option>
          <option value="Indian">Indian</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
          <option value="Pizza">Pizza</option>
        </select>
      </div>
      {error && <p>{error}</p>}

      <div class="card">
        {filteredRestaurants.map((restaurant, index) => (
          <div key={index} className="content">
            <span class="title">{restaurant.restaurantname}</span>

            <p class="desc">
              <p>
                <span>
                  <b>Cuisine: </b>
                </span>
                {restaurant.cuisine}
              </p>
              <p>
                <span>
                  <b>Price: </b>
                </span>{" "}
                {restaurant.price}
              </p>
              <p>
                <span>
                  <b>Pincode: </b>
                </span>{" "}
                {restaurant.pincode || "N/A"}
              </p>
              <p>
                <span>
                  <b>Location: </b>
                </span>
                {restaurant.location}
              </p>
              <p>
                <span>
                  <b>Rating: </b>
                </span>{" "}
                {restaurant.rating}
              </p>
            </p>
            <div className="button">
              <button
                className="update"
                onClick={() => updateRest(restaurant._id)}
              >
                Update
              </button>
              <button
                className="delete"
                onClick={() => deleteRest(restaurant._id)}
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

export default Restaurant;
