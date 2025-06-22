
import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
  const user  = useLoaderData()
//   console.log(data)

const handleUpdateUser=(e)=>{
     e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const  updateUser = {name, email}
        console.log(updateUser)


        //update 
        fetch(`http://localhost:3000/users/${user._id}`,{
           method: 'PUT',
           headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(updateUser)
            

        })
        .then(res=> res.json())
        .then(data=> {
             
             if(data.modifiedCount){
                console.log('Update done', data)
             }
        })

}


    return (
        <div>
            <h1> Mor hala</h1>
            <form onSubmit={handleUpdateUser}>
                    <input type="text" defaultValue={user.email} name='email' />
                    <br />
                    <input type="text" defaultValue={user.name}  name="name"  />
                    <br />
                    <input type="submit" value="Edited User" />
                </form>

                
        </div>
    );
};

export default UpdateUser;