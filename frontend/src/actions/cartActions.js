<<<<<<< HEAD
import axios from "axios";
import {ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO} from '../constants/cartConstants';

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const {data} = await axios.get(`/api/v1/product/${id}`);
=======
import axios from 'axios'
import { ADD_TO_CART, REMOVE_ITEM_CART, SAVE_SHIPPING_INFO } from '../constants/cartConstants'

export const addItemToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/product/${id}`)
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e

    dispatch({
        type: ADD_TO_CART,
        payload: {
<<<<<<< HEAD
            product: data.product.id,
=======
            product: data.product._id,
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            stock: data.product.stock,
            quantity
        }
    })

<<<<<<< HEAD
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartIterms))
=======
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
}

export const removeItemFromCart = (id) => async (dispatch, getState) => {

    dispatch({
        type: REMOVE_ITEM_CART,
        payload: id
    })

<<<<<<< HEAD
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartIterms))
=======
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))

>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
}

export const saveShippingInfo = (data) => async (dispatch) => {

    dispatch({
        type: SAVE_SHIPPING_INFO,
        payload: data
    })

<<<<<<< HEAD
    localStorage.setItem('shipingInfo', JSON.stringify(data))
=======
    localStorage.setItem('shippingInfo', JSON.stringify(data))

>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
}