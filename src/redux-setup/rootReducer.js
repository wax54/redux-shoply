import data from '../data';
import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const INITIAL_STATE = { inventory: data.products, cart: {} }

function rootReducer(state=INITIAL_STATE, action) {
    const cart = { ...state.cart };
    switch(action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            cart[item.id] ? 
                cart[item.id].qty++ : 
                cart[item.id] = {...item, qty: 1};
            return {...state, cart}
        case REMOVE_FROM_CART:
            const id = action.payload;
            if (cart[id]){
                if(cart[id].qty <= 1){
                    delete cart[id];
                } else {
                    cart[id].qty--;
                }
            }
            return { ...state, cart };
            
        default:
            return {...state}
    }
}

export default rootReducer 
export { INITIAL_STATE }