import React from 'react';

const Cart = (props) => {
    const { cart } = props
    let name = ''
    for (const product of cart) {
        name = name + product.name + ','
    }
    return (
        <div>
            <h4>{name}</h4>


        </div>
    );
};

export default Cart;