import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import ItemList from "./Item/ItemList";
import "./Cart.css";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const itemsInCart = Object.keys(cart).reduce((totalItems, nextKey) => (
            totalItems + cart[nextKey].qty
        ), 0);

    return (
        <div className="Cart">
            <h2>THIS IS YOUR CART!</h2>
            <h4>FYI, there {itemsInCart === 1 ? "is" : "are"} {itemsInCart} items in your cart right now!</h4>
            {itemsInCart ? 
                <ItemList items={cart} /> :
                <Link className="btn" to="/">Get Shopping!</Link>
            }
        </div>
    )
}
export default Cart