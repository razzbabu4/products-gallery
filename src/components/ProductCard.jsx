import useProduct from "../hooks/useProduct";
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { setSelectedProduct } = useProduct();
  return (
    <div className="card bg-base-100 w-full shadow-xl border border-stone-700">
      <figure>
        <img
          src={product.image} alt={product.name} className="w-full h-40 md:h-52 object-cover rounded-t-lg " />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">
          {product.name}
        </h2>
        <div className="card-actions">
          <div className="badge badge-outline badge-info font-bold text-md p-3">{product.category}</div>
          <div className="badge badge-outline text-green-500 font-bold text-md p-3">$ {product.price}</div>
        </div>
        <p>{product.description}</p>
        <button
          onClick={() => setSelectedProduct(product)}
          className="mt-2 bg-green-800 text-white p-2 rounded-full btn text-lg"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object
}

export default ProductCard;
