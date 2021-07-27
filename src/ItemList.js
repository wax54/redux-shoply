import Item from './Item';
const ItemList = ({ items }) => (
    <ul>
        {Object.keys(items).map(key => 
            <Item key={key} item={{...items[key], id: key}} />)}
    </ul>
);

export default ItemList