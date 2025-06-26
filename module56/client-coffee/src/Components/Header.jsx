import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            <Link to={'/addcoffe'}> <li> Add New Coffee </li> </Link>
        </div>
    );
};

export default Header;