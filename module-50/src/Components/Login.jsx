import {  sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from './firebaseinit';
import { FaF } from 'react-icons/fa6';

const Login = () => {

  const [error, seterror ] = useState('')
  const [success, setsuccess]= useState(false)
  const emailRef = useRef()

    const handleLogin=(e)=>{
          e.preventDefault()

          const email = e.target.email.value
          const password = e.target.password.value
            
          //reset error
          seterror('')
          setsuccess(false)
              
          signInWithEmailAndPassword(auth, email, password)
          .then(result=>{
            console.log(result)
            if(!result.user.emailVerified){
                alert('Please verify your email')
            }
            else{
                setsuccess(true)
            }

            
          })
          .catch(errr=>{
            console.log(errr)
            seterror(errr.message)
          })

    }

    const handlePassword=()=>{
            const email = emailRef.current.value;
            sendPasswordResetEmail(auth, email)
            .then(()=>{
                alert('your password reset link sent to your email')
            })
            .catch(errorr =>{
                seterror(errorr)
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content ">
    <div className="text-center lg:text-left">
       
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div onClick={handlePassword }><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </form>
        <h1>{error}</h1>
        <h1> {
            success && <p> User login Success </p>} </h1>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;