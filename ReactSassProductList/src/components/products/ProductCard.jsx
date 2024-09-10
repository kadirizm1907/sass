

const ProductCard = ({price, title, description, image}) => {
  return (
    <div>
    <div>
      <h3>{price}</h3>
    </div>
    <img src={image} alt={description} width={"100px"} />
    <div>
      <h2>{title}</h2>
    </div>
  </div>
  )
}

export default ProductCard