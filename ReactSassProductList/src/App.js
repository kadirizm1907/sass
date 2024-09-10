import Header from "./components/header/Header"
import ProductsList from "./components/products/ProductsList"
import { products, categories } from "./helper/data"
import "./App.scss"
function App() {
  return (
    <div>
      <Header categories={categories} text="Products" />
      <ProductsList products={products} />
    </div>
  )
}

export default App
