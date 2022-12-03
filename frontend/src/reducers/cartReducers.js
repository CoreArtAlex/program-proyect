<<<<<<< HEAD
import {ADD_TO_CART, REMOVE_ITEM_CART,SAVE_SHIPPING_INFO} from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [], shippingInfo: {}}, action) => {
=======
import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingInfo: {} }, action) => {
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
    switch (action.type) {

        case ADD_TO_CART:
            const item = action.payload;

<<<<<<< HEAD
            const isItemExist = state.cartItems.find(i => i.product === item.product);
=======
            const isItemExist = state.cartItems.find(i => i.product === item.product)
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e

            if (isItemExist) {
                return {
                    ...state,
<<<<<<< HEAD
                    cartItems: state.cartItems.map(i => i.product === isItemExist.product
                         ? item : i)
=======
                    cartItems: state.cartItems.map(i => i.product === isItemExist.product ? item : i)
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
<<<<<<< HEAD
=======

>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.product !== action.payload)
            }
<<<<<<< HEAD
        case SAVE_SHIPPING_INFO:
            return{
=======


        case SAVE_SHIPPING_INFO:
            return {
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
                ...state,
                shippingInfo: action.payload
            }

<<<<<<< HEAD
=======

>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
        default:
            return state
    }
}