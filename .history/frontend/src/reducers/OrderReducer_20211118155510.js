import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    CLEAR_ERRORS,
} from '../constants/orderConstant';

export const newOrderReducer = (state = {} , action) {
    switch (action.type) {
        case CREATE_ORDER_REQUEST:
            return {
                ...stat
            };
    
        default:
            break;
    }
};