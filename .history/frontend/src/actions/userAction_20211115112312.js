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

        const {data} = await axios.post(
            `/api/login`, 
            { email: email, password: password}, 
            config
        );
    } catch (error) {
        
    }
};
