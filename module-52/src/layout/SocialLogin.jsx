import React from 'react';
import { FaGoogle } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold'> Login With </h1>
            <button className='py-2 px-6 bg-base-200 w-full btn btn-outline'> login with google</button>
            <button className='py-2 px-6 bg-accent w-full'> <FaGoogle/>  login with github</button>
        </div>
    );
};

export default SocialLogin;