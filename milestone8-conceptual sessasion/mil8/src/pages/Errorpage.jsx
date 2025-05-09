import React from 'react';
import Navbar from '../components/Navbar';
import { useRouteError } from 'react-router';

const Errorpage = () => {

    const error = useRouteError()
    return (
        <div className='justify-center content-center '>
            <Navbar />
            <h1 className='text-center font-bold'> { error?.error?.message
                } </h1>
        </div>
    );
};

export default Errorpage;