import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux-setup/actionCreators";
import "./CartButtons.css";

const CartButtons = ({item}) => {
    const { id, price } = item;
    const qty = useSelector(state => state.cart[id] ? state.cart[id].qty : 0);
    const dispatch = useDispatch();

    const add = () => {
        dispatch(addToCart(item));
    }
    const remove = () => {
        dispatch(removeFromCart(id));
    }

    return ( 
        <div className="CartButtons">
            <div className="CartButtons-btn-container">
                <button className="CartButtons-btn  CartButtons-add-to-cart" onClick={add}>
                    +
                </button>
                {qty ?
                    <button className="CartButtons-btn CartButtons-remove-from-cart" onClick={remove}>
                        -
                    </button>
                    : null
                }
            </div>
            {qty ?
                <div className="CartButtons-quantity">
                    ${price} X {qty} = ${price * qty}
                        {qty > 2 ? <span className="alert"> Woo! Keep going! </span> : null}
                </div>
                : <div className="CartButtons-none-ordered">
                    Press the Big Green Button To Order
                </div>
            }
        </div>
    );
}
export default CartButtons