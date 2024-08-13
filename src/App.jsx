import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import AllProducts from "./AllProducts";
import AboutUs from "./AboutUs";
import SingleProduct from "./SingleProduct";
import Header from "./Header";
import Footer from "./Footer";  // Import the Footer

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Routes>
      <Footer />  {/* Footer appears on all pages */}
    </>
  );
};

export default App;
