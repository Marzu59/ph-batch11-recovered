import React, { createContext, use, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebas-config';

export const  authContex = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const [loading , setloading] = useState(true)
  // console.log(user)
  const createUser = ( email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
  }

const logIn = (email, password)=>{
           setloading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

 const logOut = ()=>{
    return  signOut(auth)
 }

const updateUser =(updatedata)=>{
  // console.log(updatedata)
  return  updateProfile(auth.currentUser, updatedata)
}


  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, currentUser=>{
      // console.log('ath changed', currentUser)
        setUser(currentUser)
        setloading(false)
    })
    return ()=>{  
      unsubscribe();
    }
  }, [])


   const authdata  = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    loading,
    setloading,
    updateUser
   }
  // console.log(user)
    return  <authContex.Provider value={authdata} >  {children}  </authContex.Provider>
};

export default AuthProvider;