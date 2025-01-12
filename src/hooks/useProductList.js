import { useQuery } from "@tanstack/react-query";
import fetchProductList from "../helper/fetchProductList";

function useBreedList(product) {
  console.log("provided animal", product);
  const results = useQuery(["breeds", product], fetchProductList);

  return [results?.data?.products ?? [], results.status];
}

export default useBreedList;