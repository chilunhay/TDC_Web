import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
} from "../constants/cartConstant";

export const cartReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action
    }

}