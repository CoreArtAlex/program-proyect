import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  productsReducer,
  productDetailsReducer,
  newReviewReducer
} from "./reducers/productReducers";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducers";
<<<<<<< HEAD
import { newOrderReducer } from "./reducers/orderReducers";
=======
import { myOrdersReducer, newOrderReducer,orderDetailsReducer } from "./reducers/orderReducers";
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  cart: cartReducer,
<<<<<<< HEAD
  newOrder: newOrderReducer
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') 
        ? JSON.parse(localStorage.getItem('cartItems')) : [],
    shippingInfo: localStorage.getItem('shippingInfo') 
        ? JSON.parse(localStorage.getItem('shippingInfo')) : {}
  }
=======
  newOrder:newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails:orderDetailsReducer,
  newReview: newReviewReducer
});



let initialState = {
  
  cart: {
    cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    shippingInfo: localStorage.getItem('shippingInfo')
        ? JSON.parse(localStorage.getItem('shippingInfo'))
        : {}
}

>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
};

const middlware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
