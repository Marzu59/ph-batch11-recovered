import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
     const singleData = useLoaderData()
     console.log(singleData)

    return (
        <div>
            <h1> {singleData.id} </h1>
            <h1> here we go </h1>
        </div>
    );
};

export default Phone;