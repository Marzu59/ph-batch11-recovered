import React, { use, useState } from 'react';

const Users = ({userPromise}) => {
     const initialuserss = use(userPromise)
     const [usrr , setusrr] = useState(initialuserss)

    //  console.log(userss)

   const handleSubmit =(e)=>{
      e.preventDefault();
      
      const name = e.target.name.value
      const email = e.target.email.value
      const person = { name, email}
    //   console.log(person)


    fetch('http://localhost:2000/users', {
        method: 'POST', 
        headers: {
            'content-type': 'application/json',

        },
        body:JSON.stringify(person)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log('data after post', data)
        const newUSers = [...usrr, data]
        setusrr(newUSers)
        e.target.reset()
    })

   }

    return (
        <div>

            <h1> data </h1>
            <form onSubmit={handleSubmit} action="">

             <input type="text" name='email' />
             <br />
             <input type="text" name='name' />
             <br />
             <input type="submit" value="add user" />


            </form>

            <div>
                {
                usrr.map(user=> <p> {user.name} </p>)
            }
            </div>
            
        </div>
    );
};

export default Users;