import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            {data.email}
            
        </div>
    );
};

export default UserDetail;