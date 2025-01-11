import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchProduct from "../helper/fetchProducts";

const Details = () => {
  const { id } = useParams();
  const results = useQuery([id], fetchProduct);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const product = results.data.products[0];
  console.log("results", results);
  console.log("product", product);
  return (
    <div className="details">
      <div>
        <h1>{product.name}</h1>
        <button>Buy {product.name}</button>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Details;
