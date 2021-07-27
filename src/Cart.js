import { useSelector, shallowEqual } from "react-redux"
import ItemList from "./ItemList";
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
                <div>Get Shopping!</div>
            }
        </div>
    )
}
export default Cart