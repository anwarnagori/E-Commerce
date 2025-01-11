import { apiUrl } from "../config/apiUrl";

async function fetchProductList({ queryKey }) {
  const category = queryKey[1];
  if (!category) return [];
  const res = await fetch(
    `${apiUrl}products?category=${category}`
);
  if (!res.ok) 
    throw new Error(`Products in category${category} fetch not successful`);
  }
  return res.json();

export default fetchProductList;
