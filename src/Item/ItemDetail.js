import { useSelector } from "react-redux";
import ItemButtons from "./ItemButtons";
import "./ItemDetail.css";
import { Redirect, useParams } from "react-router";
import ItemImage from "./ItemImage";

const ItemDetail = () => {
    const id = useParams().id;
    const item = useSelector(state => state.inventory[id]);
    if (!item) {
        return <Redirect to="/" />
    }
    item.id = id;
    const { name, price, description, image_url } = item;
    
    return (
        <div className="ItemDetail" id={id} >
            <ItemImage image_url={image_url} name={name} />
            <h4 className="ItemDetail-header">{name} - ${price}</h4>
            <p>{description}</p>
            <ItemButtons item={item} />
        </div>
    )
};
export default ItemDetail