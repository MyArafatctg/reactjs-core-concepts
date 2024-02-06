import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    },[]);

    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
        const newCart = [...cart,id];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map(product => <Product
                key={product.id}
                Products={product}
                addToCart = {addToCart}
                ></Product>)}
            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;