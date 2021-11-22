import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
} from "../constants/cartConstant";

export const cartReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;

            const isItemExist = state.cartItems.find((i) => i.product === item.product);

            if(isItemExist){
                return {
                    ...state,
                    cartItems: state.cartItems.map((i) =>
                        i.product === isItemExist.product ? item : i
                    ),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                };
            }

        default:
            state;
    }

};