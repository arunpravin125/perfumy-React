import one from "../assets/images/one.jpg"
import two from "../assets/images/two.jpg"
import three from "../assets/images/three.jpg"
// products Components
function Products(){
    return <div className="products">
      <div className="productsDetail">
        <img src={one} className="productImage" alt='image1'></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, veniam.
  
        </p>
      </div>
      <div className="productsDetail">
        <img src={two} className="productImage" alt='image2'></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, veniam.
          
        </p>
      </div>
      <div className="productsDetail">
        <img src={three} className="productImage" alt='image3'></img>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, veniam.
          
        </p>
      </div>
  
    </div>
  }
  export default Products