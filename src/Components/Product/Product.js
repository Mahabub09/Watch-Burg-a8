import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, price, seller, img, size } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='brand'><small>Brand: {seller}</small></p>
                <p className='size'>Size: {size}</p>
                <p className='price'>Price: ${price}</p>

            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'> Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>


        </div>
    );
};

export default Product;