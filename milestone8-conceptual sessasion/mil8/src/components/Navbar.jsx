import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { IoMdCart } from "react-icons/io";
import { MdBookmarkAdded } from "react-icons/md";
import { cartContext } from '../providers/contexts';

const Navbar = () => {
   const {cart, setCart} = useContext(cartContext)

    return (
        <div className="navbar p-0 bg-base-100 shadow-sm mx-auto px-8 md:px-12 lg:px-18">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" cursor-pointer lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li>
        <NavLink to={'/'} className={({isActive})=> isActive ? ' text-white bg-blue-600' : ''} >Home</NavLink>
        </li>
      <li>
        <NavLink  to={'/about'} className={({isActive})=> isActive ? ' text-white bg-blue-600' : ''}  >About</NavLink> 
        </li>
      <li>
        <Link><IoMdCart size={20} /></Link>
        </li>
      <li>
        <NavLink to={'/favorites'} className={({isActive})=>isActive? ' text-white bg-blue-600' : ''} > <MdBookmarkAdded size={20} /> </NavLink>
        
        </li>
      </ul>
    </div>
    <Link  className="btn btn-ghost text-xl">FlagshipsFaceoff</Link>
  </div>
  
  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to={'/'} className={({isActive})=> isActive ? ' text-white bg-blue-600' : ''} >Home</NavLink>
        </li>
      <li>
        <NavLink  to={'/about'} className={({isActive})=> isActive ? ' text-white bg-blue-600' : ''}  >About</NavLink> 
        </li>
      <li className='relative'>
        <NavLink to={'/cart'}><IoMdCart size={20} />
        <p>{cart.length}</p>
        </NavLink>
        </li>
      <li>
        <NavLink to={'/favorites'} className={({isActive})=>isActive? ' text-white bg-blue-600' : ''} > <MdBookmarkAdded size={20} /> </NavLink>
        
        </li>
      
      
    </ul>
    
  </div>
</div>
    );
};

export default Navbar;