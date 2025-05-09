import React, { useState } from 'react';
import Hero from '../components/Hero';
import PhonesContainer from '../components/PhonesContainer'
import { useLoaderData } from 'react-router';

const Home = () => {
      
    const data = useLoaderData()
       const [phones, setPhones] =useState(data)
    const handleSearch  = (e, text)=>{
       e.preventDefault() 
       if(text === '') return setPhones(data)
        
            const searchedPhone = data.filter(phon=> phon?.name.toLowerCase().split(' ').includes(text.toLowerCase()) ||
           phon?.brand.toLowerCase().split(' ').includes(text.toLowerCase() ) )
            

           setPhones(searchedPhone)

    }

    return (
        <div>
            
             <Hero handleSearch={handleSearch} />

             <PhonesContainer data={phones} />



        </div>
    );
};

export default Home;