// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Hospital() {
//   const [Hospital, setHospital] = useState([]);
//   const [error, setError] = useState(null);
//   const [selectedLocation, setSelectedLocation] = useState("");
//   const [selectedDept, setSelectedDept] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/hospitalget");
//         console.log("Response:", response);
//         setHospital(response.data);
//       } catch (err) {
//         console.error("Error:", err);
//         setError("An error occurred while fetching data.");
//       }
//     };
//     fetchData();
//   }, []);

//   const filteredHospital = Hospital.filter(
//     (HospitalItem) => HospitalItem.location == selectedLocation &&
//     HospitalItem.department == selectedDept
//   );

//   const handleLocationChange = (event) => {
//     setSelectedLocation(event.target.value);
//   };

//   const handleDeptChange = (event) =>{
//     setSelectedDept(event.target.value);
//   };
//   const updateHospital = async (id) => {
//     const newLocation = prompt("Enter the new location");
//     if (newLocation) {
//       try {
//         const response = await axios.put("http://localhost:3001/salonupdate", {
//           newLocation: newLocation,
//           id: id,
//         });
  
 
//         if (response.data === "updated") {

//           const updatedHospital = Hospital.map((HospitalItem) => {
//             if (HospitalItem._id === id) {
//               return { ...Hospital, location: newLocation };
//             }
//             return HospitalItem;
//           });
  

//           setHospital(updatedHospital);
//         }
//       } catch (error) {
//         console.error("Error updating salon:", error);
//       }
//     }
//   };
  

//   const deleteRest = async (id) => {
//     if (window.confirm("Are you sure you want to delete this restaurant?")) {
//       try {
//         const response = await axios.delete(
//           `http://localhost:3001/deletesalon/${id}`
//         );

//         if (response.data === "deleted") {
//           const updatedSalon = Salon.filter(
//             (Salon) => Salon._id !== id
//           );
//           setSalon(updateSalon);
//           alert("Salon deleted successfully");
//         } else {
//           alert("Failed to delete Salon");
//         }
//       } catch (error) {
//         console.error("Error deleting restaurant:", error);
//         alert("An error occurred while deleting the restaurant");
//       }
//     }
//   };


//   return (
//     <div>
//     <h1 className="restheading">Hospital</h1>
//       <div className="option">
//         <select
//           name="location"
//           id="location"
//           onChange={handleLocationChange}
//           className="location"
//         >
//           <option value="">Select Location</option>
//           <option value="Indiranagar">Indiranagar</option>
//           <option value="Hulimavu">Hulimavu</option>
//           <option value="Bannerghatta Road">Bannerghatta Road</option>
//           <option value="JP Nagar ">JP Nagar</option>
//         </select>

//         <select
//           name="department"
//           id="department"
//           onChange={handleDeptChange}
//           className="department"
//         >
//           <option value="">Select Department: </option>
//           <option value="Gynecologist">Gynecologist</option>
//           <option value="Neurologist ">Neurology</option>
//           <option value="Multispecialist">Multispecialist</option>
//           <option value="Optician">Optician</option>

//         </select>
//       </div>
//       {error && <p>{error}</p>}

//       <div class="card">
//         {filteredHospital.map((HospitalItem) => (
//           <div key={HospitalItem._id} className="content">
//             <span class="title">
//               Hospital Name: {HospitalItem.hospitalname}
//             </span>

//             <p class="desc">
//               <p><b>Location: </b>{HospitalItem.location}</p>
//               <p><b>Department: </b>{HospitalItem.department}</p>
//               <p><b>Number: </b>{HospitalItem.contact}</p>
//             </p>

//             <div className="button">
//               <button
//                 className="update"
//                 onClick={() => updateHospital(HospitalItem._id)}
//               >
//                 Update
//               </button>
//               <button
//                 className="delete"
//                 onClick={() => deleteRest(SalonItem._id)}
//               >
//                 Delete
//               </button>
//             </div>

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Hospital;
import React, { useEffect, useState } from "react";
import axios from "axios";

function Hospital() {
  const [hospital, setHospital] = useState([]); // Change to lowercase 'hospital'
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDept, setSelectedDept] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/hospitalget");
        console.log("Response:", response);
        setHospital(response.data);
      } catch (err) {
        console.error("Error:", err);
        setError("An error occurred while fetching data.");
      }
    };
    fetchData();
  }, []);

  const filteredHospital = hospital.filter(
    (hospitalItem) =>
      hospitalItem.location == selectedLocation &&
      hospitalItem.department == selectedDept
  );

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleDeptChange = (event) => {
    setSelectedDept(event.target.value);
  };

  const updateHospital = async (id) => {
    const newLocation = prompt("Enter the new location");
    if (newLocation) {
      try {
        const response = await axios.put("http://localhost:3001/hospitalupdate", {
          newLocation: newLocation,
          id: id,
        });
  
        if (response.data.message === "Hospital location updated successfully") {
          
          const updatedHospital = hospital.map((hospitalItem) => {
            if (hospitalItem._id === id) {
              return { ...hospitalItem, location: newLocation };
            }
            return hospitalItem;
          });

          setHospital(updatedHospital);
  
          alert("Hospital location updated successfully");
        } else {
          alert("Failed to update hospital location");
        }
      } catch (error) {
        console.error("Error updating hospital:", error);
      }
    }
  };
  
  const deleteHospital = async (id) => { 
    if (window.confirm("Are you sure you want to delete this hospital?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3001/deletehospital/${id}` 
        );

        if (response.data === "deleted") {
          const updatedHospital = hospital.filter(
            (hospitalItem) => hospitalItem._id !== id 
          );
          setHospital(updatedHospital);
          alert("Hospital deleted successfully");
        } else {
          alert("Failed to delete hospital");
        }
      } catch (error) {
        console.error("Error deleting hospital:", error);
        alert("An error occurred while deleting the hospital");
      }
    }
  };

  return (
    <div>
      <h1 className="restheading">Hospital</h1>
      <div className="option">
        <select
          name="location"
          id="location"
          onChange={handleLocationChange}
          className="location"
        >
          <option value="">Select Location</option>
          <option value="Indiranagar">Indiranagar</option>
          <option value="Hulimavu">Hulimavu</option>
          <option value="Bannerghatta Road">Bannerghatta Road</option>
          <option value="JP Nagar">JP Nagar</option>
        </select>

        <select
          name="department"
          id="department"
          onChange={handleDeptChange}
          className="department"
        >
          <option value="">Select Department: </option>
          <option value="Gynecologist">Gynecologist</option>
          <option value="Neurologist ">Neurology</option>
          <option value="Multispecialist">Multispecialist</option>
          <option value="Optician">Optician</option>
        </select>
      </div>
      {error && <p>{error}</p>}

      <div className="card">
        {filteredHospital.map((hospitalItem) => (
          <div key={hospitalItem._id} className="content">
            <span className="title">
              Hospital Name: {hospitalItem.hospitalname}
            </span>

            <p className="desc">
              <p>
                <b>Location: </b>
                {hospitalItem.location}
              </p>
              <p>
                <b>Department: </b>
                {hospitalItem.department}
              </p>
              <p>
                <b>Number: </b>
                {hospitalItem.contact}
              </p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hospital;

