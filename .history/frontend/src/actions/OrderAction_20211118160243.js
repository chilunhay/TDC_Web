import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CLEAR_ERRORS,
} from '../constants/orderConstant';
import axios from 'axios';

// Create Order
export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: CREATE_ORDER_REQUEST });

        const config =
        
    } catch (error) {
        dispatch({ 
            type: CREATE_ORDER_FAIL,
            payload: error.response.data.message,
        });
    }
;}