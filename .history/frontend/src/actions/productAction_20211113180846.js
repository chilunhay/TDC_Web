import axios from "axios";
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_DETAILS_REQUEST,
    ALL_PRODUCT_DETAILS_SUCCESS,
    ALL_PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstant";

export const getProduct = ()=> async (dispatch)=> {
    try {
        
        dispatch({ type: ALL_PRODUCT_REQUEST });

        const {data} = await axios.get("/api/v1/products");

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing errors
export const clearErrors = ()=> async (dispatch)=> {
    dispatch({ type:CLEAR_ERRORS });
}