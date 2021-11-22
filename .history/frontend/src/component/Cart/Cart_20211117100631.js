import React, { Fragment } from 'react';
import './Cart.css';
import CartItemCard from './CartItemCard';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart)


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


                {cartItems && cartItems.map()}

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
