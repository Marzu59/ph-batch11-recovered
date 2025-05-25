import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { authContex } from '../provider/AuthProvider';

const Register = () => {

const {createUser, updateUser, setUser}= use(authContex)
const [errorname , seterrorname] = useState('')
const nevigate = useNavigate()

 const handleRegister=(e)=>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    if(name.length < 5){
     return seterrorname('Name should be more then 5 charectar')
    } 
    else{
      seterrorname('')
    }

    const email = form.email.value;
    const password = form.password.value;
    const image = form.imgr.value;
    
    createUser(email, password)
    .then(result=>{
      const user = result.user
      updateUser({displayName: name, photoURL: image})
      .then(()=>{
        setUser({...user, displayName: name, photoUrl: image})
        nevigate('/')
      })
      .catch((error)=>{
        // console.log(error)
        setUser(user)
      })
      
           

    })
    .catch(error=>{
      // console.log(error)
    })

   
     
 }

    return (
        <div className="hero bg-base-200 min-h-screen flex justify-center items-center">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              
              
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                  <label className="label">Email</label>
                  <input name='email' type="email" className="input" placeholder="Email"  required/>

                  <label className="label">Name</label>
                  <input type="name" name='name' className="input" placeholder="Name" />
                   { errorname &&  <p> {errorname} </p> }
                  <label className="label">Photo URL</label>
                  <input type="img" name='imgr' className="input" placeholder="Image URL" />



                  <label className="label">Password</label>
                  <input name='password' type="password" className="input" placeholder="Password" />
                  
                  <button type='submit' className="btn btn-neutral mt-4">Register</button>
                  <p>have an Account <Link to={'/auth/login'}> <span className='font-semibold text-accent'>logine Here</span> </Link> </p>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Register;