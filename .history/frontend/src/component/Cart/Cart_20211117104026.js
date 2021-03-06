import React, { Fragment } from 'react';
import './Cart.css';
import CartItemCard from './CartItemCard';
import { useSelector, useDispatch } from 'react-redux';
import { addItemsToCart, removeItemsFromCart } from '../../actions/cartAction';

const Cart = () => {

    const dispatch = useDispatch();

    const { cartItems } = useSelector((state) => state.cart);

    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if(stock <= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };

    const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if(1 >= quantity) {
            return;
        }
        dispatch(addItemsToCart(id, newQty));
    };

    const deleteCartItems = () => {
        dis
    };


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


                {cartItems &&
                    cartItems.map((item) => (
                        <div className="cartContainer" key={item.product}>
                            <CartItemCard item={item} deleteCartItems={removeItemsFromCart} />
                            <div className="cartInput">
                                <button 
                                    onClick={() => 
                                    decreaseQuantity(item.product, item.quantity)}
                                >
                                    -
                                </button>
                                <input type="number" value={item.quantity} readOnly />
                                <button 
                                    onClick={() => 
                                    increaseQuantity(item.product, item.quantity, item.stock)}
                                >
                                    +
                                </button>
                            </div>
                            <p className="cartSubtotal">{`${formatter.format(item.price * item.quantity)}`}</p>
                        </div>
                    ))}

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
