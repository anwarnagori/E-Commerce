import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProduct from "../helper/fetchProducts";

const Details = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery([id], fetchProduct);

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">Error loading product details!</div>;
  }

  const product = data.products.find((product) => product.id.toString() === id);

  if (!product) {
    return <div className="error-message">Product not found!</div>;
  }

  return (
    <div className="details">
      <div className="product-info">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-brand">
            <strong>Brand: </strong>
            {product.brand}
          </p>
          <p className="product-price">
            <strong>Price: </strong>${product.price}
          </p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
      <div className="additional-info">
        <h3>Product Features</h3>
        <ul>
          {product.features &&
            product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Details;
