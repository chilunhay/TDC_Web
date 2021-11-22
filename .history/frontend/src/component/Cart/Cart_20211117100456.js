import React, { Fragment } from 'react';
import './Cart.css';
import CartItemCard from './CartItemCard';
import { useSelector, use } from 'react-redux';

const Cart = () => {


    const item = {
        product: "productId",
        price: "200",
        name: "chilunhay",
        quantity: 1,
        image: "https://cdn.discordapp.com/attachments/739045762767388766/906082279753916426/unknown_1.png",
    }

    var formatter = new Intl.NumberFormat('it-IT', {
        style: 'currency',
        currency: 'VND',
    });

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
                    <p className="cartSubtotal">{`${formatter.format(item.price * item.quantity)}`}</p>
                </div>

                <div className="cartGrossProfit">
                    <div></div>
                    <div className="cartGrossProfitBox">
                        <p>Gross Total</p>
                        <p>{`600`}</p>
                    </div>
                    <div></div>
                    <div className="checkOutBtn">
                        <button>Check Out</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;
