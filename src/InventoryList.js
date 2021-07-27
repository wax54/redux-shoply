import { useSelector } from 'react-redux';
import ItemList from './ItemList';
const InventoryList = () => {
    const inventory = useSelector(state => state.inventory);
    return (
        <div>
            <h1>HELLO, HERE IS OUR INVENTORY!</h1>
            <ItemList items={inventory} />

        </div>
    )
}
export default InventoryList