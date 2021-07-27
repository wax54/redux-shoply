import { useDispatch } from "react-redux";

const Item = ({ item }) => {
    const {id, name, price, description, image_url, qty } = item;
    const dispatch = useDispatch();
    const add = () => {
        dispatch({
            type: "ADD_TO_CART",
            payload: item
        });
    }
    const remove = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: id
        });
    }
    return (
    <div id={id}>

        <img src={image_url} alt={name} height="200px"/>
        <h4>{name} - ${price}</h4>
        <p>{description}</p>
        <div>{qty ? `Total In Cart: ${qty} - Total Price: $${price * qty}` : null}</div>
        <button onClick={add}>Add One To Cart</button>
        <button onClick={remove}>Remove One From Cart</button>

    </div>
)};
export default Item