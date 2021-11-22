import { 
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
} from "../constants/productConstant";


export const productReducer = ((state = {products: []}), (action) => {

    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                product: []
            }
            case ALL_PRODUCT_SUCCESS:
                return {
                    loading: false,
                    product: action.payload.products
                }
                case ALL_PRODUCT_:
                    return {
                        loading: true,
                        product: [ ]
                    }
    
        default:
            break;
    }
    
});