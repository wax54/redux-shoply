import ItemButtons from "./ItemButtons";
import "./ItemCard.css";
import { useHistory } from "react-router";
import ItemImage from "./ItemImage";

const ItemCard = ({ item }) => {
    const {id, name, price, image_url, qty } = item;
    const history = useHistory();

    const navToItem = (evt) => {
        if(evt.target.localName !== "button"){
            history.push(`/items/${id}`);
        }
    }
    return (
        <div className="ItemCard" id={id} onClick={navToItem}>

            <ItemImage image_url={image_url} name={name} />
            <h4 className="ItemCard-header">{name} - ${price}</h4>
            
            <ItemButtons item={item} />
        </div>
)};
export default ItemCard