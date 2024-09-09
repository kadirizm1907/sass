import Header from "./components/Header"
import Card from "./components/Card"
import { Footer } from "./components/Footer"
import data from "./data"
import "./scss/app.scss"

function App() {
  return (
    <div>
      <Header />
      <Card data={data}/>
      <Footer />
    </div>
  )
}

export default App
