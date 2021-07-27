import Item from './Item';

const ItemList = ({ items }) => (
    <div className="ItemList">
        {Object.keys(items).map(key => 
            <Item key={key} item={{...items[key], id: key}} />)}
    </div>
);

export default ItemList