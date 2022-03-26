import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const { name, img } = cart

    return (
        <div className='cart-item'>
            <img className='img-cart' src={img} alt="" />
            <h4>{name}</h4>
        </div>
    );
};

export default Cart;