import React from 'react';
import './Showcountry.css';

const Showcountry = (props) => {
    // console.log(props.products)
        const {id, name, quantity} = props.products;
        let addToCartLS = {};
        // console.log(area,population);
        let addToCart = (ID) =>{
            let shopingCart = localStorage.getItem('Add-To-Cart');
            if (shopingCart){
                // console.log(shopingCart);
                addToCartLS = JSON.parse(shopingCart);
            }else{
                addToCartLS = {};
            }
            let isExit = addToCartLS[id];
            if (isExit){
                const newQty = isExit + 1;
                addToCartLS[id] = newQty;

            }else{
            addToCartLS[id]=1;
        }
            // let qty = +isExit + 1
                localStorage.setItem('Add-To-Cart',JSON.stringify(addToCartLS));
        }
        const removeCart = (id) =>{
            let shoppingCart = localStorage.getItem('Add-To-Cart');
            let shoppingCartExit = JSON.parse(shoppingCart);
            if (shoppingCartExit){
                if (id in shoppingCartExit){
                    // console.log(id);
                    delete shoppingCartExit[id];
                    localStorage.setItem('Add-To-Cart', JSON.stringify(shoppingCartExit))
                }else{
                    alert("This Item not exited in shopping cart");
                }
            }
        }
    return (
        <div className="cnt-div">
            <h1>Name : {name}</h1>
            <h3>ID : {id}</h3>
            <p>Phone : {quantity}</p>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeCart(id)}>Remove Cart</button>
        </div>
    );
};

export default Showcountry; 