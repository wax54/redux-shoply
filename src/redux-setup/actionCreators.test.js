import rootReducer, { INITIAL_STATE } from './rootReducer';
import { createStore } from "redux"
import { addToCart, removeFromCart } from './actionCreators';


describe("ActionCreator Tests", () => {
    test("#addToCart", () =>{
        const testItem = { id: "TESTITEM", name: "A TEST ITEM" };
        const store = createStore(rootReducer);

        store.dispatch(addToCart(testItem))
        expect(store.getState().cart).toEqual({
            ...INITIAL_STATE.cart,
            [testItem.id]: {
                ...testItem,
                qty: 1
            }
        });
    });

    test("#removeFromCart", () => {
        const testItem = { id: "TESTITEM", name: "A TEST ITEM" };
        const store = createStore(rootReducer);
        store.dispatch(addToCart(testItem));
        //#verify item has been added
        expect(store.getState().cart).toEqual({
            ...INITIAL_STATE.cart,
            [testItem.id]: {
                ...testItem,
                qty: 1
            }
        });
        //test removal of item from cart
        store.dispatch(removeFromCart(testItem.id))
        expect(store.getState().cart).toEqual({
            ...INITIAL_STATE.cart
        });
    });
});