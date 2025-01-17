import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Middle = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error fetching data: {error.message}</h2>;

  return (
    <div className="body">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Link to={`/details/${product.id}`}>
              <img src={product.images[0]} alt={product.image} width="100" />
              <h3>{product.brand}</h3>
              <p>
                <strong>Price: </strong>${product.price}
              </p>
              <button>Add to cart</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Middle;
