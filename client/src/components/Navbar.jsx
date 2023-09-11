import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Signup from "./Signup";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">GEOSPATIAL</h1>
      <Link to="/" className="px-4 hover:scale-105 duration-300">
        Home
      </Link>

      {/* <Link to="/Login" className="px-4 hover:scale-105 duration-300">
        Login
      </Link> */}
      <Link to="/Map" className="px-4 hover:scale-105 duration-300">
        Map
      </Link>
      <Link to="/Owner" className="px-4 hover:scale-105 duration-300">
        Enroll
      </Link>
      <Link to="/register" className="px-4 hover:scale-105 duration-300">
        Signup
      </Link>
      <Link to="/restaurant" className="px-4 hover:scale-105 duration-300">
        Restaurant
      </Link>
      <Link to="/salon" className="px-4 hover:scale-105 duration-300">Salon</Link>
      <Link to="/police" className="px-4 hover:scale-105 duration-300">Police</Link>
      <Link to="/hospital" className="px-4 hover:scale-105 duration-300" >Hospital</Link>
      <Link to="/fashion" className="px-4 hover:scale-105 duration-300">Fashion</Link>
      {/* <Link to="/household" className="px-4 hover:scale-105 duration-300">Household</Link> */}
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          GEOSPATIAL
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <button></button>
          </li>
          <li className="p-4 border-b border-gray-600">Login</li>
          <li className="p-4 border-b border-gray-600">Map</li>
          <li className="p-4">About</li>
          <li className="p-4 border-b border-gray-600">Enroll </li>
          <li className="p-4 border-b border-gray-600">Sign Up</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
