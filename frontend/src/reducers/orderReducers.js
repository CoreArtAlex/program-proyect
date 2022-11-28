import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_REQUEST_SUCCESS,
    CREATE_ORDER_REQUEST_FAIL,
    CLEAR_ERRORS
} from '../constants/orderConstants';

export const newOrderReducer = (state={},action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_ORDER_REQUEST_SUCCESS:
            return {
                loading: false,
                order: action.payload
            }
        case CREATE_ORDER_REQUEST_FAIL:
            return {
                loading: false,
                order: action.payload
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