import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { auth } from '../../firebas-init';
import { Authcontex } from '../../contex/AuthContex';
import { useNavigate } from 'react-router';



const Register = () => {
     const {createuser} = use(Authcontex)
     const nevigate = useNavigate()

         const handleRegister =(e)=>{
            e.preventDefault()
            const name = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;

            // createUserWithEmailAndPassword(auth,  email, password)
            // .then(result=>{
            //     console.log(result)

            // })
            // .catch(error=>{
            //     console.log(error)
            // })


            
             createuser(email, password)
             .then(result =>{
                console.log(result)
                nevigate('/')
             })
             .catch(error=> {
                console.log(error)
             })


         }


    return (
        <div>
              <div className='  mx-auto'>
   
  
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl c">
      <div className="card-body">
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label  className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
       
      </div>
    </div>
       </div>

        </div>
    );
};

export default Register;