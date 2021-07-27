import ItemCard from './ItemCard';
import "./ItemList.css"
const ItemList = ({ items }) => (
    <div className="ItemList">
        {Object.keys(items).map(key => 
            <ItemCard key={key} item={{...items[key], id: key}} />)}
    </div>
);

export default ItemList