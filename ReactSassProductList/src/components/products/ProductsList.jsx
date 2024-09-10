import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div className="card-container">
       {products.map((products) => (
        <ProductCard key={products.id} {...products} />
      ))}
    </div>
  );
};
export default ProductsList;
