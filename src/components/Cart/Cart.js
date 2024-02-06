import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const cart = props.cart;
    let totalPrice = 0;
    let totalShipping = 0;
    for (const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    let tax = (totalPrice * cart.length) / 100;
    let grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className="cart-container">
                <h2>Shop Summary</h2>
                <h2>Selected Item : {cart.length}</h2>
                <p>Total Price : ${totalPrice.toFixed(2)} </p>
                <p>Shopping : ${totalShipping.toFixed(2)}</p>
                <p>Tax : ${tax.toFixed(2)}</p>
                <h5>GRAND TOTAL : ${grandTotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;