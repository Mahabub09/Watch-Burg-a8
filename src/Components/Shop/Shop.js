import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { handleRandomization } from '../Utility/Random';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        console.log(product)

        let newCart = []
        if (cart.length >= 4) {
            alert("Cannot add more Watch")
        }
        else {
            const existingWatch = cart.find(watch => watch.id === product.id)

            if (existingWatch) {
                alert('can not add duplicate product');
            }
            else {
                newCart = [...cart, product]
                setCart(newCart);
            }
        }


    }

    const handleResetCart = () => { setCart([]) }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>

            <div className="cart-container">
                <h3>Choosen Items</h3>

                {
                    cart.map(cart => <Cart
                        cart={cart}>

                    </Cart>)
                }
                <div className='btn-container'>
                    <button onClick={() => handleRandomization(cart, setCart)} className='btn-random'>Random Pick</button>
                    <button onClick={handleResetCart} className='btn-clear'>Clear</button>
                </div>


            </div>
        </div>
    );
};

export default Shop;