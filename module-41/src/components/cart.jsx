import React from 'react';
import './cart.css'
const Cart = ({cart, handleRemoveCart}) => {
   


    return (
        <div className='cart-container'>
            {
                cart.map(bottle=> <div>
                     
                    <img src={bottle.image} alt="" />
                    <button onClick={()=>handleRemoveCart(bottle.id)}>delete</button>
                </div>)
            }
        </div>
    );
};

export default Cart;