import React, { useState, useEffect } from "react";
import fetchProduct from "../helper/fetchProducts";
import { useParams } from "react-router-dom";
import { apiUrl } from "../config/apiUrl";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl / product / { id })
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Loading product details...</h2>;
  if (error) return <h2>Error fetching product details: {error.message}</h2>;

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.images[0]} alt={product.name} width={300} />
      <h2>Price: product.price</h2>
      <p>product.description</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Details;
