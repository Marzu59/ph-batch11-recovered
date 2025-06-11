import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to={'/phones'}> <h1>Header</h1> </Link>
            
            
        </div>
    );
};

export default Header;