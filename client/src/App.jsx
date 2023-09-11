import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home.jsx";
import Map from "./components/Map";
import Owner from "./components/Owner";
import Restaurant from "./components/Commodities/Restaurant";
import Salon from "./components/Commodities/Salon";
import Policestation from "./components/Commodities/Policestation";
import Hospital from "./components/Commodities/Hospital";
import Fashion from "./components/Commodities/Fashion";
import Household from "./components/Commodities/Household";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Signup />} />
          {/* <Route path="/Login" element={<Login />} /> */}
          <Route path="/Map" element={<Map />} />
          <Route path="/Owner" element={<Owner />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/salon" element={<Salon/>}></Route>
          <Route path="/police" element={<Policestation/>}></Route>
          <Route path="/hospital" element={<Hospital/>}></Route>
          <Route path="/fashion" element={<Fashion/>}></Route>
          {/* <Route path="/household" element={<Household/>}></Route> */}

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
