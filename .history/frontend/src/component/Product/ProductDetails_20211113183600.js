import React, { Fragment } from 'react';
import Carousel from 'react-material-ui-carousel';
import './ProductDetails.css';

const ProductDetails = () => {
    return (
        <Fragment>
            <div className="ProductDetails">
                <div>
                    <Carousel>
                        {product.images &&
                            product.images.map((item, i) => (
                                <img 
                                    className="CarouselImage"
                                    key={item.url}
                                    src={item.url}
                                    alt={`${i} Slide`}
                                />
                            ))}
                    </Carousel>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductDetails;
