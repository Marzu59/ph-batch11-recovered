import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firbase/firebase.init';

const AuthProvider = ({children}) => {
 const [loading, setloading] = useState(true)
 const [user, setuser]= useState(null)

   const createnewUser =(email, password)=>{
    setloading(true)
     return createUserWithEmailAndPassword(auth, email, password)
   }
   const signIn = (email, password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

   const signOutt =()=>{
    setloading(true)
    return  signOut(auth)
   }

   useEffect(()=>{
    const subscribe = onAuthStateChanged(auth, currentUser=>{
        setuser(currentUser)
        setloading(false)
        console.log('user in herer', currentUser)
    })
    return ()=>{
        subscribe();
    }

   }, [])


    const authinfo = {
        createnewUser, 
        signIn, 
        user,
        signOutt

    }





    return (
   

        <AuthContext value={authinfo}>
          {children}
        </AuthContext>

    );
};

export default AuthProvider;