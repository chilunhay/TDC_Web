import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
} from "../constants/userConstant";
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.post(`/api/v1/login`, { email: email, password: password}, config);

        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
};


export const register = (userData) => async (dispatch) => {

    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const {data} = await axios.post(`/api/v1/register`, userData, config);

        
    } catch (error) {
        
    }
};

// Clearing errors
export const clearErrors = ()=> async (dispatch)=> {
    dispatch({ type:CLEAR_ERRORS });
}
