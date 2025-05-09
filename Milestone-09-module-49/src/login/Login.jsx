
import { GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider, ProviderId } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebaseinit';



const Login = () => {
  const [usr, setusr]= useState(null)

    const provider = new GoogleAuthProvider()
 
    const loginHandle=()=>{
        console.log('clicked')

        signInWithPopup(auth, provider)
        .then(result =>{
            console.log(result.user)
            setusr(result.user)

        })
        .catch(error=>{
            console.log(error)
        })
    }

    const signoutHandle =()=>{
        signOut(auth).then(()=>{
            setusr(null)

        })
        .catch((error)=>{
            console.log(error)
        })
    }
  const githubProvider = new GithubAuthProvider()
    const loginhandlewithGithub=()=>{
             signInWithPopup(auth, githubProvider)
             .then(result=>{
                console.log(result.user.providerData)
                const loggedinuser = result.user
                if(!loggedinuser.email && loggedinuser?.providerData?.length){
                    if(loggedinuser.providerData[0].email){
                        loggedinuser.email = loggedinuser.providerData[0].email
                        setusr(loggedinuser)
                    }
                }
                
                
             })
             .catch((error)=>{

                console.log(error)
             })
        
    }

    return (
        <div>
            
            {
                usr ? <button onClick={signoutHandle}>Signout</button> :  <div> <h1>Login Please</h1> <button onClick={loginHandle}>Login With Google</button> 
                <button onClick={loginhandlewithGithub}>Signin With Github</button> </div> 
            }
            

            
         
           {
            usr && <div>
                <h1>Name:{usr.email}  </h1>
            </div>
           }
          
            
        </div>
    );
};

export default Login;