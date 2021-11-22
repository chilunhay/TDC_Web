import React, { Fragment } from 'react';
import './Cart.css';
import CartItemCard from './CartItemCard';

const Cart = () => {

    const item = {
        product,
        price,
        name
    }

    return (
        <Fragment>
            <div className="cartPage">
                <div className="cartHeader">
                    <p>Product</p>
                    <p>Quality</p>
                    <p>Subtotal</p>
                </div>
            </div>

            <div className="cartContainer">
                <CartItemCard item={item} />
            </div>
        </Fragment>
    )
}

export default Cart;
