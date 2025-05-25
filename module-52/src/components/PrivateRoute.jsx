import React, { use } from 'react';
import { authContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router';
import LoadingIcon from '../pages/LoadingIcon';

const PrivateRoute = ({children}) => {
      
    const {user} = use(authContex)
    const {loading} = use(authContex) 
    const location =useLocation()
    //   console.log(location)

    if(loading){
        return <LoadingIcon></LoadingIcon>
    }


     if(user && user?.email){
        return children;
     }

     return <Navigate state={location.pathname} to={'/auth/login'}> </Navigate>
        

     
   
};

export default PrivateRoute;