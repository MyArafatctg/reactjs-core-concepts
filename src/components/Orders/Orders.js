import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../utilities/fakedb';
import CheckOut from '../CheckOut/CheckOut';
import './Order.css'
import { CreditCardIcon } from '@heroicons/react/24/solid'

const Orders = () => {
    const products = useLoaderData();
    const [cart, setCart] = useState([]);
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

    const deleteItem = (id) => {
        const remainingItem = cart.filter(item => item.id !== id);
        setCart(remainingItem);
        removeFromDb(id);
    }
    const clearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className="shop-container">
            <div className="CheckOut-container">
                {
                    cart.map(product => <CheckOut
                    key={product.id}
                    product={product}
                    deleteItem ={deleteItem}
                    ></CheckOut>)
                }
            </div>
            <Cart cart={cart} clearCart ={clearCart}>
            <Link className='payment-link' to={"/payment"}>
            <button className='review'>
                    <span>Proceed Checkout</span>
                    <CreditCardIcon className='btnTrash'></CreditCardIcon>
                </button>
            </Link>
            </Cart>
        </div>
    );
};

export default Orders;