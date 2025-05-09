import React, { useEffect, useState } from 'react';
import PhoneCard from '../components/PhoneCard';
import { getFavorites, removeFavorite } from '../utils';
import Empitystate from '../empitystate';

const Favorites = () => {

    const [displayPhone, setDisplayPhone] = useState([])
      
  useEffect(()=>{
    const savedPhone = getFavorites()
        setDisplayPhone(savedPhone)
  }, [])

const removeHandle = (id)=>{
  // console.log(id)
  removeFavorite(id)
setDisplayPhone(getFavorites())

}

if(displayPhone.length < 1 ){
  return <Empitystate />
}


    return (
        <div className='py-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
        
                    {
                        displayPhone.map(phone=> <PhoneCard deletabel={true} key={phone.id} phone={phone} removeHandle={removeHandle} /> )
                     }    
        
                    </div>
                    
        
                   
        
        
                </div>
    );
};

export default Favorites;