import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-around items-center'>
            <div >
                <NavLink to={'/'}> Home   </NavLink>
                <NavLink to={'/about'}> About   </NavLink>
                <NavLink to={'/career'}>  Career  </NavLink>
            </div>
            <div className='login-btn flex gap-3'>
 
               <button className='btn btn-primary px-10'>
                  login
               </button>
               <img src={'user.png'} alt="" />
            </div>
        </div>
    );
};

export default Navbar;