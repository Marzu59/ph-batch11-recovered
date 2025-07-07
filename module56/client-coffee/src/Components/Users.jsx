import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData()
    
    const [users, setUsers]= useState(initialUsers)

    const handleDelete = (_id)=>{
        

        const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {

   fetch(`https://server-site-ten-lime.vercel.app/users/${_id}`, {
    method: 'DELETE'
    
   })
   .then(res=> res.json())
   .then(data=>{
      
    if(data.deletedCount){
   
        const remaaningUsers= users.filter(usr=> usr._id !== _id)
        setUsers(remaaningUsers)
      
swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });

    }

   })
     

    
  } 
   else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
// 

});
    }
   
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    
       {
        users.map((user, index)=> <tr key={user._id}>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.address}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
          <button onClick={()=> handleDelete(user._id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr> )
       }

      
      
      
      
    </tbody>
    
   
  </table>
</div>
        </div>
    );
};

export default Users;