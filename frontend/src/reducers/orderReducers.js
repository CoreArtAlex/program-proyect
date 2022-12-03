import {
    CREATE_ORDER_REQUEST,
<<<<<<< HEAD
    CREATE_ORDER_REQUEST_SUCCESS,
    CREATE_ORDER_REQUEST_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants';

export const newOrderReducer = (state={},action) => {
    switch (action.type) {
=======
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_RESET,
    UPDATE_ORDER_FAIL,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_RESET,
    DELETE_ORDER_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants'

export const newOrderReducer = (state = {}, action) => {
    switch (action.type) {

>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
<<<<<<< HEAD
        case CREATE_ORDER_REQUEST_SUCCESS:
=======

        case CREATE_ORDER_SUCCESS:
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
            return {
                loading: false,
                order: action.payload
            }
<<<<<<< HEAD
        case CREATE_ORDER_REQUEST_FAIL:
=======

        case CREATE_ORDER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const myOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {

        case MY_ORDERS_REQUEST:
            return {
                loading: true
            }

        case MY_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload
            }

        case MY_ORDERS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const orderDetailsReducer = (state = { order: {} }, action) => {
    switch (action.type) {

        case ORDER_DETAILS_REQUEST:
            return {
                loading: true
            }

        case ORDER_DETAILS_SUCCESS:
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
            return {
                loading: false,
                order: action.payload
            }
<<<<<<< HEAD
=======

        case ORDER_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

export const allOrdersReducer = (state = { orders: [] }, action) => {
    switch (action.type) {

        case ALL_ORDERS_REQUEST:
            return {
                loading: true
            }

        case ALL_ORDERS_SUCCESS:
            return {
                loading: false,
                orders: action.payload.orders,
                totalAmount: action.payload.totalAmount
            }

        case ALL_ORDERS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
<<<<<<< HEAD
        default:
            return state;
    }
=======

        default:
            return state;
    }
}

export const orderReducer = (state = {}, action) => {
    switch (action.type) {

        case UPDATE_ORDER_REQUEST:
        case DELETE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_ORDER_FAIL:
        case DELETE_ORDER_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case UPDATE_ORDER_RESET:
            return {
                ...state,
                isUpdated: false
            }

        case DELETE_ORDER_RESET:
            return {
                ...state,
                isDeleted: false
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
>>>>>>> 38e7f6ee1e12550b3ceb44f6b0f8ec7381add95e
}