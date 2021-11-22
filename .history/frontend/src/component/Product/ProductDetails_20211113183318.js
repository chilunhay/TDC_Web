import React, { Fragment } from 'react';
import Carousel from 'react-material-ui-carousel';
import './ProductDetails.css';

const ProductDetails = () => {
    return (
        <Fragment>
            <div className="ProductDetails">
                <div>
                    <Carousel>
                        {product.images }
                    </Carousel>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductDetails;
