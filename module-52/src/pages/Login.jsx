import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { authContex } from '../provider/AuthProvider';

const Login = () => {
  const   {logIn} = use(authContex)
  const [error, seterror ] =  useState('')
     const location =useLocation()
      const nevigate = useNavigate()
          


  const handlelogin =(e)=>{
     
  e.preventDefault()
  const email = e.target.email.value;
  const password = e.target.password.value;
  // console.log(email, password)
    
  logIn(email, password)
  .then((usercredintial=>{
     const user = usercredintial.user
    //  console.log(user)
      nevigate(`${location.state?  location.state : '/'}`)

  }))
  .catch(error=>{
    // const errorCode = error.code;
    const errorMessage = error.message;
    // alert(errorCode, errorMessage)
       seterror(errorMessage)

  })
  }


    return (
        <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handlelogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          {error && <p> {error} </p>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button  className="btn btn-neutral mt-4">Login</button>
          <p>Don't Have an Account <Link to={'/auth/register'}> <span className='font-semibold text-accent'>Register Here</span> </Link> </p>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;