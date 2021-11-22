import { 
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
} from '../constands/productConstands'


export const productReducer = ((state = { product: [] }, action) => {

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            
            return {
                loading: true,
                product: []
            }
    
        default:
            break;
    }
});