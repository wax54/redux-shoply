import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';
import rootReducer, { INITIAL_STATE } from './rootReducer';
import { createStore } from "redux"

describe("rootReducer Tests", () => {
    test("INITIAL STATE is returned if no input is entered", () => {
        const store = createStore(rootReducer);
        expect(store.getState()).toEqual(INITIAL_STATE);
    });

    test("ADD_TO_CART works", () => {
        const testItem = { id: "TESTITEM", name: "A TEST ITEM" };
        const store = createStore(rootReducer);
        //test adding to cart
        store.dispatch({ type: ADD_TO_CART, payload: testItem })

        expect(store.getState().cart).toEqual({
            ...INITIAL_STATE.cart,
            [testItem.id]: {
                ...testItem,
                qty: 1
            }
        });

        //test incrementing in cart
        store.dispatch({ type: ADD_TO_CART, payload: testItem })

        expect(store.getState().cart).toEqual({
            ...INITIAL_STATE.cart,
            [testItem.id]: {
                ...testItem,
                qty: 2
            }
        });
    });

    test("REMOVE_FROM_CART works", () => {
        const testItem = { id: "TESTITEM", name: "A TEST ITEM" };
        const store = createStore(rootReducer);
        //Add 2 items to cart
        store.dispatch({ type: ADD_TO_CART, payload: testItem })
        store.dispatch({ type: ADD_TO_CART, payload: testItem })
        //verify they've been added
        expect(store.getState().cart).toEqual({
            ...INITIAL_STATE.cart,
            [testItem.id]: {
                ...testItem,
                qty: 2
            }
        });


        //test Decrementing in cart
        store.dispatch({ type: REMOVE_FROM_CART, payload: testItem.id })

        expect(store.getState().cart).toEqual({
            ...INITIAL_STATE.cart,
            [testItem.id]: {
                ...testItem,
                qty: 1
            }
        });

        //test removal from cart
        store.dispatch({ type: REMOVE_FROM_CART, payload: testItem.id })
        expect(store.getState().cart).toEqual({
            ...INITIAL_STATE.cart,
        });

        //test nothing happens if you try to remove something that's not there
        store.dispatch({ type: REMOVE_FROM_CART, payload: testItem.id })
        expect(store.getState().cart).toEqual({
            ...INITIAL_STATE.cart,
        });

    });
});