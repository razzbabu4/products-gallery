import { createContext, useState, useEffect } from "react";
import { generateProducts } from "../utils/generateProduct";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filterCategory, setFilterCategory] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products
        .filter((product) =>
            filterCategory ? product.category === filterCategory : true
        )
        .filter((product) =>
            searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
        )
        .sort((a, b) => {
            if (sortOption === "priceAsc") return a.price - b.price;
            if (sortOption === "priceDesc") return b.price - a.price;
            if (sortOption === "popularity") return b.popularity - a.popularity;
            return 0;
        });
 

    useEffect(() => {
        const getAllProduct = generateProducts(21);
        setProducts(getAllProduct);
    }, []);

    const allProduct = {
        products,
        selectedProduct,
        setSelectedProduct,
        filteredProducts,
        setFilterCategory,
        setSortOption,
        setSearchQuery
       
    }

    return (
        <ProductContext.Provider value={allProduct}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
