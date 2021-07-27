import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./redux-setup/actionCreators";
import "./Item.css";

const Item = ({ item }) => {
    const {id, name, price, description, image_url, qty } = item;
    const dispatch = useDispatch();
    const add = () => {
        dispatch(addToCart(item));
    }
    const remove = () => {
        dispatch(removeFromCart(id));
    }
    return (
        <div className="Item" id={id}>

            <img src={image_url} alt={name} height="200px" className="Item-image"/>
            <h4 className="Item-header">{name} - ${price}</h4>
            <p className="Item-description">{description}</p>
            {qty ?
                <div className="Item-quantity">
                    Total In Cart: {qty} - Total Price: ${price * qty}
                </div> 
                : null
            }
            <button className="Item-btn Item-add-to-cart" onClick={add}>Add One To Cart</button>
            <button className="Item-btn Item-remove-from-cart" onClick={remove}>Remove One From Cart</button>

        </div>
)};
export default Item