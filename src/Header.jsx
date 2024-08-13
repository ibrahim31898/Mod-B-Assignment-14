import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Product Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">All Products</Link>
        <Link to="/about">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
