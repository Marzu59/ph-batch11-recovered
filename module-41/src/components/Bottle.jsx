import React from 'react';
import './bottle.css'

const Bottle = ({bottle, handleAddcart}) => {
    
    const { brand, image } = bottle



    return (
        <div className='card'>
            <h5>{brand}</h5>
            <img src={image} alt="" />  
            <button onClick={()=>handleAddcart(bottle)}>buy now</button>
           


        </div>
    );
};

export default Bottle;