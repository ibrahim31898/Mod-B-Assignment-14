import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './SingleProduct.css';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProductData] = useState(null);

  useEffect(() => {
    getApiData();
  }, [id]);

  const getApiData = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProductData(res.data);
  };

  return (
    <div className="single-product">
      {product ? (
        <div className="product-details">
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <h3>Price: ${product.price}</h3>
          <p>Category: {product.category}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SingleProduct;
