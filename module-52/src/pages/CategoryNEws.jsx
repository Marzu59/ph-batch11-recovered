import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNEws = () => {

    const {id} = useParams();
    const data = useLoaderData();
     console.log(data)

    return (
        <div>
            <h1> Category News id: {id}  </h1> 

        </div>
    );
};

export default CategoryNEws;