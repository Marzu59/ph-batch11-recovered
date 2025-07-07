import React, { use } from 'react';
import { AuthContex } from './contex/AuthContex';

const Signin = () => {

    const {signin} = use(AuthContex)

  const signinHandle=(e)=>{
    e.preventDefault();
    
    const form = e.target ;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)
    // firebase
     
    signin(email, password)
    .then(result=>{
        console.log(result.user)
         
     const signinInfo = {
        email,
        lastsignInTime: result.user.metadata.lastSignInTime
     }
     // update last signin in database
     fetch('https://server-site-ten-lime.vercel.app/users', {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },  
        body: JSON.stringify(signinInfo)
     })
     .then(res=> res.json())
     .then(data=> {
        console.log('after update patch', data)

     })



    })
   .catch(error=>{
    console.log(error)
   })
      

  }


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignIn now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={signinHandle} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">SignIn</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signin;