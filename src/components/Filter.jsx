import useProduct from "../hooks/useProduct";

const Filters = () => {
    const { setFilterCategory, setSortOption } = useProduct();
    return (
        <div className="flex justify-between p-4 border border-stone-700 rounded-md mt-10">
            <select onChange={(e) => setFilterCategory(e.target.value)} className="p-2 rounded text-white bg-green-800 font-medium">
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Cloths">Cloths</option>
                <option value="Groceries">Groceries</option>
                <option value="Furniture">Furniture</option>
            </select>

            <select onChange={(e) => setSortOption(e.target.value)} className="p-2 rounded text-white bg-green-800 font-medium">
                <option value="">Sort By</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
            </select>
        </div>
    );
};

export default Filters;
