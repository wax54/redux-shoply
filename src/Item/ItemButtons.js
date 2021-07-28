import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux-setup/actionCreators";
import "./ItemButtons.css";

const ItemButtons = ({item}) => {
    const dispatch = useDispatch();

    const { id, price } = item;
    const qty = useSelector(state => state.cart[id] ? state.cart[id].qty : 0);

    const totalPrice = (price * qty).toFixed(2);
    
    const qtyDescription = (
        <div className="ItemButtons-quantity">
            ${price} X {qty} = ${totalPrice}
            {qty > 2 ? <span className="alert"> Woo! Keep going! </span> : null}
        </div>);

    const add = () => {
        dispatch(addToCart(item));
    }
    const remove = () => {
        dispatch(removeFromCart(id));
    }
    

    return ( 
        <div className="ItemButtons">
            <div className="ItemButtons-btn-container">
                <button className="ItemButtons-btn  ItemButtons-add-to-cart" onClick={add}>
                    +
                </button>
                {qty ?
                    <button className="ItemButtons-btn ItemButtons-remove-from-cart" onClick={remove}>
                        -
                    </button>
                    : null
                }
            </div>
            {qty ? 
                { qtyDescription } 
                : 
                <div className="ItemButtons-none-ordered">
                    Press the Big Green Button To Order
                </div>
            }
        </div>
    );
}
export default ItemButtons