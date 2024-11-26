import useProduct from "../hooks/useProduct";
const Modal = () => {
  const { selectedProduct, setSelectedProduct } = useProduct();

  // console.log(selectedProduct);

  if (!selectedProduct) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 md:w-[600px]">
        <div className="flex gap-4 w-full justify-center items-center">
          <img src={selectedProduct.image} alt="product image" className="h-44 w-1/2 object-cover hidden md:flex" />
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold text-stone-800">{selectedProduct.name}</h2>
            <p className="text-gray-800">{selectedProduct.description}</p>
            <p className="text-green-500 font-bold mt-2">${selectedProduct.price}</p>
            <p className="text-gray-800 mt-2">Category: {selectedProduct.category}</p>
            <p className="text-yellow-500">Popularity: {selectedProduct.popularity}⭐</p>
          </div>
        </div>
        <button
          onClick={() => setSelectedProduct(null)}
          className="mt-4 bg-red-500 text-white p-2 rounded float-right"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
