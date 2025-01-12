const fetchProduct = async ({ queryKey }) => {
  console.log("querykey", queryKey);
  const id = queryKey[1];
  const apiRes = await fetch(`https://dummyjson.com/products?id=${id}`);
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }
  return apiRes.json();
};

export default fetchProduct;