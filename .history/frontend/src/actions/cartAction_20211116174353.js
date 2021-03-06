import { ADD_TO_CART } from '../constants/cartConstant';
import axios from 'axios';



// Add Items to Cart
export const addItemsToCart = (id, quantity) => async (dispatch) => {


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


    localStorage.setItem("cartItems", JSON.stringify())
};
