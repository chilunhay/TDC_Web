import { 
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
} from "../constants/productConstant";


export const productReducer = ((state = {products: []}), (action) => {

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            
            return {
                loading
            }
    
        default:
            break;
    }
    
});