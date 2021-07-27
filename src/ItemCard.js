import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./redux-setup/actionCreators";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
    const {id, name, price, description, image_url, qty } = item;
    const itemsInCart = useSelector(state => state.cart[id] ? state.cart[id].qty : 0);
    const dispatch = useDispatch();
    
    const add = () => {
        dispatch(addToCart(item));
    }
    const remove = () => {
        dispatch(removeFromCart(id));
    }
    return (
        <div className="ItemCard" id={id}>

            <img src={image_url} alt={name} className="ItemCard-image"/>
            <h4 className="ItemCard-header">{name} - ${price}</h4>
            {qty ?
                <div className="ItemCard-quantity">
                    Total In Cart: {qty} - Total Price: ${price * qty}
                </div> 
                : null
            }
            <div className="ItemCard-btn-container">
                <button className="ItemCard-btn ItemCard-add-to-cart" onClick={add}>
                    +
                </button>
                {itemsInCart > 0 ?
                        <button className="ItemCard-btn ItemCard-remove-from-cart" onClick={remove}>
                            -
                        </button>
                    : null 
                }
            </div>
            {itemsInCart > 0 ? <div>{itemsInCart} in cart</div> : null }

        </div>
)};
export default ItemCard