import React, { useEffect, useState } from "react";
import MediaCard from "./cards";
import { useLocation, useNavigate } from "react-router-dom";
import './AllProducts.css';

const AllProducts = () => {
  const [productData, setProductData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();


  const categoryMap = {
    "Men's Jeans": "men's clothing",
    "Women's Tops": "women's clothing",
    "Hoodies": "hoodies", 
    "Jackets": "jackets", 
    "Shoes": "shoes", 
    "Shop Collections": "shop", 
  };

  useEffect(() => {
    getApiData();
  }, [location.search]);

  const getApiData = async () => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");

    const fetchData = await fetch("https://fakestoreapi.com/products");
    let response = await fetchData.json();

    if (category && category !== "all") {
      const selectedCategory = categoryMap[category];

      if (selectedCategory === "men's clothing" || selectedCategory === "women's clothing") {
        response = response.filter(product =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
        );
      } else {
        response = response.filter(product =>
          product.title.toLowerCase().includes(selectedCategory) ||
          product.description.toLowerCase().includes(selectedCategory)
        );
      }
    }

    setProductData(response);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    navigate(`/products?category=${selectedCategory}`);
  };

  return (
    <div className="all-products">
      <h1>Product List</h1>
      <div className="dropdown-container">
        <select onChange={handleCategoryChange} className="category-dropdown">
          <option value="all">Select Category</option>
          {Object.keys(categoryMap).map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {productData.length > 0 ? (
          productData.map((product, index) => (
            <MediaCard
              key={index}
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
