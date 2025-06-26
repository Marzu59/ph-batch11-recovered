import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import Header from './Header';

const Home = () => {
     const initialcoffeess = useLoaderData()
     
     const [coffeess, setCoffeess] = useState(initialcoffeess)
      
     console.log(coffeess)
    return (
        <div>
            

            <div className='grid grid-cols-1 md:grid md:grid-cols-2  gap-6'>
                {
                    coffeess.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee} coffeess={coffeess} setCoffeess={setCoffeess} ></CoffeeCard>)
                }
            </div>
            
            
        </div>
    );
};

export default Home;