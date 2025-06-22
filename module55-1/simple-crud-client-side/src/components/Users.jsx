import React, { use, useState } from 'react';
import { Link } from 'react-router';


const Users = ({userPromise}) => {
          
    const initialUsers = use(userPromise)
    // console.log(initialUsers)
    const [users, setusers]  = useState(initialUsers)
 
    const handleADDuser = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const  newUser = {name, email}
        console.log(newUser)

        // create user on the database

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type':  'application/json',
                
            },
            body: JSON.stringify(newUser)

        })
        .then(res=>res.json())
        .then(data=>{
            console.log('data after creating user  in the db' ,data)
            if(data.insertedId){
                alert("user added successfully")
                e.target.reset()
                newUser._id= data.insertedId;
                
                const newUsers = [...users, newUser];
                setusers(newUsers)
                e.target.reset()

            }
        })
    }

    function handleusrDeleter (id){
        console.log('Hleo', id)
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        } )
         .then(res=>res.json())
         .then(data=> {
             if(data.deletedCount){
                const remaaningusers = users.filter(user=> user._id !== id)
                setusers(remaaningusers)
               
                console.log('after delete',data)
             }

            })
    }

    return (
        <div>
            

            <div>
                <h1> {users.length} </h1>
                <form onSubmit={handleADDuser}>
                    <input type="text" name='email' />
                    <br />
                    <input type="text" name="name"  />
                    <br />
                    <input type="submit" value="add User" />



                </form>

                {/* view user */}

                {
                    users.map(user=> <p key={user._id}> {user._id} {user.bd} <Link to={`/users/${user._id}`}>User Details</Link> <br />
                     <Link  to={`/update/${user._id}`}>Update</Link>
                      <button onClick={()=> handleusrDeleter(user._id)} className='bg-blue text-white'>DELETE</button>  {user.name} : {user.email} </p>)
                }
            </div>
        </div>
    );
};

export default Users;