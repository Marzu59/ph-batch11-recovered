import React from 'react';
import { useLoaderData } from 'react-router';

const Coffeedetails = () => {
    const coffeData = useLoaderData();
    // console.log(coffeData)

    return (
        <div>
            <h1>Supplier Name : {coffeData.Supplier} </h1>
            <h1> tk: {coffeData.chef} </h1>
            
        </div>
    );
};

export default Coffeedetails;