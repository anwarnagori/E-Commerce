import { apiUrl } from "../config/apiUrl";
async function fetchBreedList({ queryKey }) {
  const product = queryKey[1];
  if (!product) return [];
  const res = await fetch(`${apiUrl}/breeds?animal=${product}`);
  if (!res.ok) {
    throw new Error(`breeds ${product} fetch not ok`);
  }
  return res.json();
}

export default fetchBreedList;
