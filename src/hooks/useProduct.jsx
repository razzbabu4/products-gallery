import { useContext } from "react";
import ProductContext from "../providers/ProductContext";
// import { ProductContext } from "../providers/ProductProviders";

const useProduct = () => {
    const all = useContext(ProductContext)
    return all;
};

export default useProduct;