import Navbar from "./components/navbar"
import Searchinput from "./components/search"
import Products from "./components/products"
import About from "./components/about"
import Footer from "./components/footer"

// Component
function App(){
    return <div><Navbar> </Navbar>
    <Searchinput></Searchinput>
    <Products></Products>
    <About></About>
    <Footer></Footer>
      </div>
}
export default App