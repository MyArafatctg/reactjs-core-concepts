import React from 'react';
import './CheckOut.css';
import { TrashIcon } from '@heroicons/react/24/solid'

const CheckOut = ({product, deleteItem}) => {
    const {id, name, price, quantity, img} = product;
    return (
        <div className='CheckItem'>
            <img className="image" src={img} alt="" />
            <div className="itemInfo">
                <p className='item-title'>{name}</p>
                <p>Price : ${price}</p>
                <p>Quantity : {quantity}</p>
            </div>
            <TrashIcon onClick={() => deleteItem(id)} className="dtlIcon" />
        </div>
    );
};

export default CheckOut;