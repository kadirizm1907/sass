const ProductsList = ({ products }) => {
  return (
    <div className="card-container">
      {products.map(({ id, price, title, description, image }) => (
        <div key={id}>
          <div>
            <h3>{price}</h3>
          </div>
          <img src={image} alt={description} width={"100px"} />
          <div>
            <h2>{title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductsList;
