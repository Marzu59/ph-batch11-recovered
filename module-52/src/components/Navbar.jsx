
import { Link, NavLink } from 'react-router';
import { authContex } from '../provider/AuthProvider';
import {  use } from 'react';

const Navbar = () => {
    const {user, logOut} = use(authContex)
    
    
    const handlelogout= ()=>{

       logOut()
       .then(()=>{

       })
       .catch(error=>{
        // console.log(error)
       })

    }


    return (
        <div className='flex justify-around items-center'>
            <div>
                <NavLink to={'/'}> Home   </NavLink>
                <NavLink to={'/about'}> About   </NavLink>
                <NavLink to={'/career'}>  Career  </NavLink>
                
            </div>
            <div className='login-btn flex gap-3'>
                
                {
                    user ? (<button onClick={handlelogout}  className='btn btn-primary px-10'>
                  Logout
               </button>) : (<Link to={'/auth/login'}> <button  className='btn btn-primary px-10'>
                  login
               </button>  </Link>)
                }
                
                 <li> Email: {user &&  user.email}  </li>
               <img src={`${user ?  user.photoURL : 'user.png' }`} alt="" />
               <p> { user && user.displayName } </p>
            </div>
        </div>
    );
};

export default Navbar;