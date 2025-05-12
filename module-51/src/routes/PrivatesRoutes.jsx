import React, { use } from 'react';
import { Authcontex } from '../contex/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivatesRoutes = ({children}) => {
   
    const {user, loading} =use(Authcontex)
    const location = useLocation()

       if(loading){
        return <div><span className="loading loading-bars loading-xs"></span>
<span className="loading loading-bars loading-sm"></span>
<span className="loading loading-bars loading-md"></span>
<span className="loading loading-bars loading-lg"></span>
<span className="loading loading-bars loading-xl"></span></div>
       }


        if (!user){
            return <Navigate state={location?.pathname} to={'/login'}>Login</Navigate>
         }
       
    return (
        <div>
            
           {children}

        </div>
    );
};

export default PrivatesRoutes;