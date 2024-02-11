import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    },[]);

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.id);
    }
    useEffect(() =>{
        let storedCart = getShoppingCart();
        const storedProduct = [];
        // get Product From Localstorage
        for (const id in storedCart){
            const saveProduct = products.find(product => product.id === id)
            if(saveProduct){
                const quantity = storedCart[id];
                saveProduct.quantity = quantity;
                storedProduct.push(saveProduct);
                
            }
        }
        setCart(storedProduct);
        console.log(storedProduct);
        
    },[products])

    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map(product => <Product
                key={product.id}
                Products={product}
                addToCart = {addToCart}
                ></Product>)}
            </div>
            <Cart cart={cart}>
            <Link className='order-link' to="/orders">
            <button className='review'>
                    <span>Review Order</span>
                    <ArrowRightIcon className='btnTrash'></ArrowRightIcon>
            </button>
            </Link>
            </Cart>
        </div>
    );
};

export default Shop;