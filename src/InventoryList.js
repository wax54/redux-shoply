import { useSelector } from 'react-redux';
import ItemList from './Item/ItemList';
import "./InventoryList.css"

const InventoryList = () => {
    const inventory = useSelector(state => state.inventory);
    return (
        <div className="InventoryList">
            <h1>HERE IS OUR INVENTORY!</h1>
            <ItemList items={inventory} />

        </div>
    )
}
export default InventoryList