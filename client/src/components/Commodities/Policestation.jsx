// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Policestation() {
//   const [Policestation, setPolicestation] = useState([]);
//   const [error, setError] = useState(null);
//   const [location, setLocation] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/policeget");
//         console.log("Response:", response);
//         setPolicestation(response.data);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("An error occurred while fetching data.");
//       }
//     };
//     fetchData();
//   }, []);

//   const filteredPolicestation = Policestation.filter(
//     (PolicestationItem) => PolicestationItem.name === location
//   );

//   const handleLocationChange = (event) =>{
//     setLocation(event.target.value);  
//   }

//   return (
//     <div>
//       <h1 className="restheading">Police</h1>
//       <div className="option">
//         <select
//           name="location"
//           id="location"
//           onChange={handleLocationChange}
//           className="location"
//         >
//           <option value="">Select Location</option>
//           <option value="Banashankari">Banashankari</option>
//           <option value="Indiranagar">Indiranagar</option>
//           <option value="ThirumalaShetty Halli">ThirumalaShetty Halli</option>
//         </select>

//       </div>
//       {error && <p>{error}</p>}

//       <div class="card">
//         {filteredPolicestation.map((PolicestationItem) => (
//           <div key={PolicestationItem._id} className="content">
//             <span class="title">
//               {" "}
//               Policestation Name: {PolicestationItem.name}
//             </span>

//             <p class="desc">
//               <p>Contact: {PolicestationItem.contact}</p>
//               <p>Pincode: {PolicestationItem.pincode}</p>
//             </p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default Policestation;
import React, { useEffect, useState } from "react";
import axios from "axios";

function Policestation() {
  const [Policestation, setPolicestation] = useState([]);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/policeget");
        console.log("Response:", response);
        setPolicestation(response.data);
      } catch (err) {
        console.error("Error:", err);
        setError("An error occurred while fetching data.");
      }
    };
    fetchData();
  }, []);

  const filteredPolicestation = Policestation.filter(
    (PolicestationItem) => PolicestationItem.name === location
  );

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Define the list of location options
  const locationOptions = [
    "Nelamangala Town",
    "Nelamangala Rural",
    "Dobbaspete",
    "Thyamagondalu",
    "Madanayakana Halli",
    "Nelamangala Traffic",
    "Doddaballapura Rural",
    "Bengaluru District Women Police Station",
    "Doddabelavangala",
    "Hosahalli",
    "Rajanukunte",
    "Vijayapura",
    "Channarayapatna",
    "Vishwanathapura",
    "Hosakote",
    "Avalahalli",
    "Nandagudi",
    "Sulibele",
    "ThirumalaShetty Halli",
    "AnugondanaHalli",
    "Anekal",
    "Bannergatta",
    "Attibele",
    "Sarjapura",
    "Jigani",
    "Hebbagodi",
    "Suryanagara",
  ];

  return (
    <div>
      <h1 className="restheading">Police</h1>
      <div className="option">
        <select
          name="location"
          id="location"
          onChange={handleLocationChange}
          className="location"
        >
          <option value="">Select Location</option>
          {locationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {error && <p>{error}</p>}

      <div className="card">
        {filteredPolicestation.map((PolicestationItem) => (
          <div key={PolicestationItem._id} className="content">
            <span className="title">
              Policestation Name: {PolicestationItem.name}
            </span>

            <p className="desc">
              <p><b>Contact: </b>{PolicestationItem.contact}</p>
              <p><b>Pincode: </b>{PolicestationItem.pincode}</p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Policestation;
