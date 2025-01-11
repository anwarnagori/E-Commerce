import { useQuery } from "@tanstack/react-query";
import fetchProductList from "../helper/fetchProductList";

function useProductList(category) {
    console.log("provided category", category);
    const results = useQuery(["products", category], fetchProductList);
    return [results?.data?.products ?? [], results.status];
}

export default useProductList;