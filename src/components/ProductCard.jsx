// import useProduct from "../hooks/useProduct";

const ProductCard = ({ product }) => {
    // const { setSelectedProduct } = useProduct();
    return (
      <div className="border p-4 rounded shadow hover:shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
        <h2 className="text-lg font-bold mt-2">{product.name}</h2>
        <p className="text-gray-600">{product.category}</p>
        <p className="text-green-500 font-bold">${product.price}</p>
        <button
        //   onClick={() => setSelectedProduct(product)}
          className="mt-2 bg-blue-500 text-white p-2 rounded btn"
        >
          View Details
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  