import { ADD_TO_CART } from '../constants/cartConstant';
import axios from 'axios';



// Login
export const addItemsToCart = (id, quantity) => async (dispatch) => {
    try {

        const { data } = await axios.get(`/api/v1/product/${id}`);

        dispatch({
            type: ADD_TO_CART,
            payload: {
                product: data.product._id,
                name: data.product.name,
                price: data.product.price,
                image: data.product.images[0].url,
                stoc
            },
        });

        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
};
