import React, { use } from 'react';
import { AuthContex } from './contex/AuthContex';
import axios from 'axios';

const  Signup  = () => {
       
    const { createUser} = use(AuthContex)
         
    const createUserHandle=(e)=>{
          e.preventDefault();
          const form = e.target
          const formInput = new FormData(form)
           
          const {email, password, ...profileinfoRemaining} = Object.fromEntries(formInput)
              
        //    console.log(email, password, userProfile)
        //   const email = formInput.get('email')
        //   const password = formInput.get('password')

             

          createUser(email, password)
          .then(data=>{
            console.log(data.user)

            const userProfile = {
                email,
                ...profileinfoRemaining,
               creationTime: data.user.metadata.creationTime
            }

            //using axious for post
            axios.post('http://localhost:3000/users', userProfile)
            .then(data=> {
              console.log(data.data)
            })


                
            // save data on mongoDB using fetch
            // fetch('http://localhost:3000/users', {
            //     method: 'POST',
            //     headers: {
            //         'content-type' : 'application/json'
            //     },
            //     body: JSON.stringify(userProfile)
            // })
            // .then(res=> res.json())
            // .then(data=>{
            //     if(data.insertedId){
            //         console.log('data added on mongo', data.insertedId)
            //     }
            // })


          })
          .catch(error=>{
            console.log(error)
          })
            




    }
     
 
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={createUserHandle} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Name" />
          <label className="label">Phone</label>
          <input type="text" name='phone' className="input" placeholder="Phone Number" />
          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
          <label className="label">Address</label>
          <input type="text" name='address' className="input" placeholder="Address" />


          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">SignUp</button>
        </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Signup;