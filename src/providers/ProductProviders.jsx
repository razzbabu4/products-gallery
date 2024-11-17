import { createContext, useState, useEffect } from "react";
import { generateProducts } from "../utils/generateProduct";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
 

    useEffect(() => {
        const getAllProduct = generateProducts(21);
        setProducts(getAllProduct);
    }, []);

    const allProduct = {
        products,
       
    }

    return (
        <ProductContext.Provider value={allProduct}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
