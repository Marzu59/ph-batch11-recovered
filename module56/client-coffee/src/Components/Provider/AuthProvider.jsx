import React from 'react';

import { AuthContex } from '../contex/AuthContex.jsx';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebasinit.js/firebase-init.js';
const AuthProvider = ({children}) => {

       
      const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email,  password)
      }
  const signin  =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
  }



    const data = {
        createUser,
        signin
        
    }

    return (
         
        <AuthContex  value={data}> {children} </AuthContex>
        
    );
};

export default AuthProvider;