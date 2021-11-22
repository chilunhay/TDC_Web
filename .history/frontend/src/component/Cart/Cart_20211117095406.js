import React, { Fragment } from 'react';
import './Cart.css';
import CartItemCard from './CartItemCard';

const Cart = () => {

    const item = {
        product: "productId",
        price: "200",
        name: "chilunhay",
        quantity: 1,
    }

    return (
        <Fragment>
            <div className="cartPage">
                <div className="cartHeader">
                    <p>Product</p>
                    <p>Quality</p>
                    <p>Subtotal</p>
                </div>


                <div className="cartContainer">
                    <CartItemCard item={item} />
                    <div className="cartInput">
                        <button>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button>+</button>
                    </div>
                    <p className="cartSubtotal">{}</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;
