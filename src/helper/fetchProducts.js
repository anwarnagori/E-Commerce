const fetchProduct = async ({ queryKey }) => {
  const id = queryKey[0];
  const response = await fetch(`https:dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error(`Product with ID id not found`);
  }

  return response.json();
}

export default fetchProduct;