import React from 'react';
import './Product.css'

const Product = (props) => {
    const {name,price,ratings,img,seller} = props.Products;
    const addToCart = props.addToCart;
    return (
        <div className="products">
            <img src={img} alt="ProductImage" />
            <div className="product-details">
                <h6>Name : {name}</h6>
                <p>Price : ${price}</p>
                <div className="manufactur">
                    <p>Manufactur : {seller}</p>
                    <p>Ratting : {ratings} Stars</p>
                </div>

            </div>
            <button onClick={()=>{addToCart(props.Products)}} className='btnAddToCart'>ADD TO CART</button>

        </div>
    );
};

export default Product;