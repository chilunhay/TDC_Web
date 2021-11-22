import { ADD_TO_CART, 
        REMOVE_CART_ITEM } 
from '../constants/cartConstant';
import axios from 'axios';



// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {


    const { data } = await axios.get(`/api/v1/product/${id}`);

    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].url,
            stock: data.product.Stock,
            quantity,
        },
    });


    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};


// Remove from Cart
export const removeItemsfromCart = (id) => async (dispatch, getState) => {
    dispatch({ 
        type:
    })
};