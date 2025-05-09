import React, { useEffect, useState } from 'react';
import { cartContext } from './contexts';
import { getCarts } from '../utils';

const CardProvider = ({children}) => {
    const [cart, setCart]= useState([])
    useEffect(()=>{
        setCart(getCarts())
    }, [])

    return (
             <cartContext.Provider value={{cart, setCart}}>

                {children}
             </cartContext.Provider>
    );
};

export default CardProvider;