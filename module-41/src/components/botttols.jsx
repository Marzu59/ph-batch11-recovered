import React, { use, useEffect, useState } from 'react';
import Bottle from './Bottle';
import './Bottles.css'
import { additemtoCardLocalsotrage, getCardformloclstorage, removeFRomlocalstorage } from '../localstorage';
import Cart from './cart';


const Botttols = ({bottlesPromise}) => {
 const bottles = use(bottlesPromise)


 const [cart, setCart]= useState([])
const handleAddcart =(bottle)=>{
      console.log(cart)
      const  newCart = [...cart, bottle]
      setCart(newCart)

      additemtoCardLocalsotrage(bottle.id)
      

}

const handleRemoveCart =(id)=>{
    const remainingCart = cart.filter(bottle=> bottle.id !== id)
    setCart(remainingCart)
    removeFRomlocalstorage(id)
}


useEffect(()=>{
    
    const storedcarids = getCardformloclstorage()
     
     const storedcard =[]
    for(const id of storedcarids){
      
        const cartbottle = bottles.find(bottle=> bottle.id === id)
        storedcard.push(cartbottle)
        console.log(storedcard)
        
    }
    setCart(storedcard)
     
}, [bottles])






    return (
        <div >
            <h3>data amount : {bottles.length}</h3>
            <h4>cart added: {cart.length} </h4>
            <Cart cart={cart} handleRemoveCart={handleRemoveCart} ></Cart>
            <div className='perent-div' >
            {
                bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle} handleAddcart={handleAddcart}></Bottle> )
            }
        </div>
            </div>
    );
};

export default Botttols;