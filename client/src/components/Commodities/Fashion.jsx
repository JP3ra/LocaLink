import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Fashion() {
  const [fashion, setFashion] = useState([]);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fashget');
        console.log('Response:', response);
        setFashion(response.data);
      } catch (err) {
        console.error('Error:', err);
        setError('An error occurred while fetching data.');
      }
    };
    fetchData();
  }, []);

  const filteredFashion = fashion.filter(
    (fashionItem) => fashionItem.location == selectedLocation
  );

  const handleLocationChange = (event) =>{
    setSelectedLocation(event.target.value);
    console.log(selectedLocation);
  }

  return (
    <div>
        <h1 className="restheading">Fashion</h1>
        <div className="option">
        <select
          name="location"
          id="location"
          onChange={handleLocationChange}
          className="location"
        >
          <option value="">Select Location</option>
          <option value="Begur">Begur</option>
          <option value="Indiranagar">Indiranagar</option>
          <option value="Vega City">Vega city</option>
          <option value="JP Nagar">JP Nagar</option>
        </select>

      </div>
      {error && <p>{error}</p>}

      <div class="card">
        {filteredFashion.map((fashionItem) => (
          <div key={fashionItem._id} className="content">
            <span class="title">
              Brand: {fashionItem.brand}
            </span>

            <p class="desc">
              <p><b>Location: </b>{fashionItem.location}</p>
              <p><b>Offering </b>{fashionItem.offering}</p>
              <p><b>Rating: </b>{fashionItem.rating}</p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fashion;
