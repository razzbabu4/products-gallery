
const Filters = () => {
    return (
        <div className="flex justify-between p-4 bg-gray-500 mt-10">
            <select 
            // onChange={(e) => setFilterCategory(e.target.value)} className="p-2 rounded text-white"
            >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Books">Books</option>
                <option value="Clothing">Clothing</option>
            </select>

            <select 
            // onChange={(e) => setSortOption(e.target.value)} className="p-2 rounded text-white"
            >
                <option value="">Sort By</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
            </select>
        </div>
    );
};

export default Filters;
