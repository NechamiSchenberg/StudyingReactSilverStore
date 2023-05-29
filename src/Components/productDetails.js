import { observer } from "mobx-react"
import { useParams } from "react-router-dom";
import { CartStore } from "../data/cartStore";
import { SilverStore } from "../data/silverStore";

const ProductDetails = () => {

    const productID = useParams().productID;
    const product = SilverStore.getProductById(productID)
    const addToCart = (product) => {
        CartStore.add(product)
    }
    return (
        (<div className="productDetails">{
            product ? (<div><img src={`/pictures/${product.image}`}></img>
                <div>
                    <p>{product.Name} </p>
                    <p>מחיר: ₪{product.Price}</p>
                    {product.inStock === 0 ? (<p>המוצר אזל מהמלאי</p>) : (<p>נותרו עוד: {product.inStock} במלאי</p>)}
                    {/* <span>כמות:</span> <input type="number" placeholder="1" min='1' max='5' /> */}
                    <input id={product.Id*2} type="button" value="הוספה לסל"onMouseUp={e=>e.target.value='V'} onClick={()=>addToCart(product)}  style={{ 'backgroundColor': 'rgb(28, 10, 89)', 'color': 'silver', 'paddingInline': '2%', 'paddingBlock': '0.5%' }}/>
                </div></div>) : ""
        }
        </div>)
    )
}
export default observer(ProductDetails);