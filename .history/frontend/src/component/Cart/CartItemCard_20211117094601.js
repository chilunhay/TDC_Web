import React from 'react';
import './CartItemCard.css';

const CartItemCard = ({ item }) => {
    return (
        <div className="CartItemCard">
            <img src={item.image} alt={} />

        </div>
    )
}

export default CartItemCard;
