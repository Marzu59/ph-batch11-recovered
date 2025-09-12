import React, { use } from 'react';
import singinLottie from '../../Lottie/signin.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/authcontext/AuthContext';
import { useLocation, useNavigate } from 'react-router';


const Signin = () => {
  const {signIn} =use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
    const from = location.state || '/'


   const handleSignin = (e)=>{
  e.preventDefault();
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    // console.log(email, password) 
    signIn(email, password)
    .then(result=>{
      console.log(result.user)
      navigate(from)

    })
    .catch(error=>{
      console.log(error)
    }) 
    
    
 }  
    
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <Lottie style={{width: '200px'}} animationData={singinLottie} loop={true}></Lottie>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <form onSubmit={handleSignin}>
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Signin</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signin;