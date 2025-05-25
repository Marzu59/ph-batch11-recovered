import React from 'react';
import SocialLogin from '../layout/SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';

const Rightaside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>

            <FindUs></FindUs>
            
            <Qzone ></Qzone>
        </div>
    );
};

export default Rightaside;