import React, { useEffect, useState } from 'react';
import { Authcontex } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebas-init';



const googleProvider = new    GoogleAuthProvider()
const AuthProvider = ({children}) => {
  const [user, setuser] = useState(null)
  const [loading  , setloading] = useState(true)

     const createuser =(email, password)=>{
      setloading(true)
       return createUserWithEmailAndPassword( auth, email, password)
     }

     const login =(email, password)=>{
         setloading(true)
        return signInWithEmailAndPassword(auth, email, password )
     }

     const googleSingnin = ()=>{
            setloading(true)
              return signInWithPopup(auth, googleProvider   )
     }

    //  onAuthStateChanged(auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log('ok', currentUser)
    //     }
    //     else{
    //         console.log('not ok')
    //     }

    //  })

 useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
        console.log('current user insidfe useEffect',currentUser)
        setuser(currentUser)
          setloading(false)
       })
       return ()=>{
        unsubscribe()
       }


 }, [])

const signout = ()=>{
  return signOut(auth)
}


  const userInfo ={
    user,
    createuser,
    login,
    signout,
    loading,
    googleSingnin
  }
          
    return (
        <Authcontex value={userInfo}>
            {children}
        </Authcontex>
        
    );
};

export default AuthProvider;