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
                product: [],
            }
            case ALL_PRODUCT_SUCCESS:
            
            return {
                loading: false,
                product: [],
            }
    
        default:
            break;
    }
});