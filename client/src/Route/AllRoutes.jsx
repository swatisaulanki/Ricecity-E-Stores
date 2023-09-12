import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Home/Homepage";
import Storepage from "../Pages/Store/Storepage";
import Aboutpage from "../Pages/About/Aboutpage";
import Contactuspage from "../Pages/Cotactus/Contactuspage";
import Policies from "../Pages/Policy/Policies";
import Loginpage from "../Pages/Login/Loginpage";
import Registerpage from "../Pages/Login/Registerpage";
import Cartpage from "../Pages/Cart/Cartpage";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={<Storepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contactus" element={<Contactuspage />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="singleproduct/:id" element={<SingleProduct/>}/>
      </Routes>
    </>
  );
};

export default AllRoutes;
