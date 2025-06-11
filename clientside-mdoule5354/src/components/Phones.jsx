import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {

    const phones = useLoaderData()
    return (
        <div>
            <h1>All phones are here {phones.length} </h1>

            {
                phones.map(phone=><li> <Link to={`/phone/${phone.id}`}> {phone.brand} </Link> </li>)
            }

        </div>
    );
};

export default Phones;