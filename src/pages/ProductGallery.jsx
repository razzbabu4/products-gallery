import Modal from "../components/Modal";
import ProductCard from "../components/ProductCard";
import useProduct from "../hooks/useProduct";

const ProductGallery = () => {
    const { filteredProducts } = useProduct();

    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 hover:scale-100">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Modal/>
        </div>
    );
};

export default ProductGallery;
