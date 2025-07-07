import React from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react'; // Optional icon set
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const CoffeeCard = ({coffee, setCoffeess, coffeess}) => {
 

  const handleDelete=(_id)=>{

    // console.log(id)
   

    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  console.log(result.isConfirmed)

  if (result.isConfirmed) {

      fetch(`https://server-site-ten-lime.vercel.app/coffees/${_id}`, {
        method: "DELETE"

      })
      .then(res=> res.json())
      .then(data=> {
          
        console.log('after delted', data)
        if(data.deletedCount){

          Swal.fire({
      title: "Deleted!",
      text: "Your Coffee has been deleted.",
      icon: "success"
    });
      
      const remeaningCoffess = coffeess.filter(coff=> coff._id !== _id)
        setCoffeess(remeaningCoffess)
      

        }
       
      })

    
    
  }
});


  }

  return (
    <div className="flex items-center w-[260px] md:w-[325px] justify-between bg-[#f9f8f4] p-6 rounded-xl shadow-sm max-w-xl mx-auto">
      {/* Coffee Cup Image */}
      <img
        src={coffee.photo}
        alt="Coffee Cup"
        className="w-28 h-40 object-contain "
      />

      {/* Coffee Info */}
      <div className="flex-1   ">
        <p className="text-lg font-semibold">
          <span className="text-gray-800">Name: </span>
          <span className="text-gray-600"> {coffee.name} </span>
        </p>
        <p className="text-lg font-semibold mt-1">
          <span className="text-gray-800">TAKA:</span>
          <span className="text-gray-600">{coffee.chef}</span>
        </p>
        <p className="text-lg font-semibold mt-1">
          <span className="text-gray-800">TASTE:</span>
          <span className="text-gray-600"> {coffee.taste} </span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col space-y-2 ml-6">
       <Link to={`/coffedetails/${coffee._id}`}> <button className="bg-[#c6b092] p-2 rounded-md hover:scale-105 transition">
          <Eye className="w-5 h-5 text-white" />
        </button></Link> 
       <Link to={`/updatecoffe/${coffee._id}`}> <button className="bg-gray-800 p-2 rounded-md hover:scale-120 transition">
          <Pencil className="w-5 h-5 text-white" />
        </button></Link>  
        <button onClick={()=>handleDelete(coffee._id)} className="bg-red-500 p-2 rounded-md hover:scale-105 transition">
          <Trash2 className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
