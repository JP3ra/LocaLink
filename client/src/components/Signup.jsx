import React, { useState } from "react";
import axios from "axios";
const Signup = () => {

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/register", {
        firstname,
        lastname,
        username,
        phonenumber,
        address,
        pincode,
        password,
        email,
        age,
        sex,
      });
      alert("Registration complete! Login Now.");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center h-fit">
      <form onSubmit={onSubmit} className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">

        <h2 className="text-4xl dark:text-white font-bold text-center">
          SIGN UP
        </h2>
        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="firstname">First Name: </label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            id="firstname"
            value={firstname}
            onChange={(event) => setFirstname(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="lastname">Last Name:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            id="lastname"
            value={lastname}
            onChange={(event) => setLastname(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="username">Username: </label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="phonenumber">Phone number:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            id="phonenumber"
            value={phonenumber}
            onChange={(event) => setPhonenumber(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="address">Address:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="address"
            id="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="pincode">Pincode:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            id="pincode"
            value={pincode}
            onChange={(event) => setPincode(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="password">Password:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="Password" 
            name="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="email">Email:</label>
          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="age">Age</label>

          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="number"
            name=""
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>

        <div className="flex flex-col text-gray-400 py-2">
          <label htmlFor="sex">Sex</label>

          <input
            className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
            type="text"
            name=""
            id="sex"
            value={sex}
            onChange={(event) => setSex(event.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full my-5 py-2 bg-teal-400 shadow-lg shadow-teal-500/100 hover:scale-105 duration-300"
        >
          Sign up
        </button>
        {/* <Link to="/Login" className="text-white px-10">
          Already have account? Login here
        </Link> */}
      </form>
    </div>
  );
};

export default Signup;
