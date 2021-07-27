import { useSelector } from "react-redux"
import ItemList from "./ItemList";

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const itemsInCart = () => (
        Object.keys(cart).reduce((totalItems, nextKey) => (
            totalItems + cart[nextKey].qty
        ), 0)
    );

    return (
        <div>
            <h2>Cart!</h2>
            <h4>FYI, there are {itemsInCart()} items in your cart right now!</h4>
            {itemsInCart() ? 
                <ItemList items={cart} /> :
                <div>Get Shopping!</div>
            }
        </div>
    )
}
export default Cart