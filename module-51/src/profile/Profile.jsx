import React, { use } from 'react';
import { Authcontex } from '../contex/AuthContex';

const Profile = () => {
    const {user} = use(Authcontex)


    return (
        <div className='text-center '>
            <h1>{user.email}</h1>
            
        </div>
    );
};

export default Profile;