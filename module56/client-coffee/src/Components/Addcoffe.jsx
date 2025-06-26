import React from 'react';
import Swal from 'sweetalert2';


const Addcoffe = () => {
  
 const handleAddcoffe = (e)=>{
    e.preventDefault()
    const form = e.target
     const dataa = new FormData(form);
     const CoffeeData = Object.fromEntries(dataa.entries())
    //  console.log(CoffeeData)


  //send coffee data to db

     fetch('http://localhost:3000/coffees', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(CoffeeData)
     })
     .then(res=>res.json())
     .then(data=> {
        if(data.insertedId){
            console.log( 'after adding coffe to db', data)
        Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true
});
// form.reset()
        }
        
     })


 }


    return (
        <div className='p-24'>
            <div className='p-12 text-center'>
                <h1 className="text-6xl">
                    Add Coffe
                </h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>


            <form onSubmit={handleAddcoffe} className="space-y-6">
        {/* Row 1: Name & Chef */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Name</label>
            <input type="text" name='name' placeholder="Enter coffee name" className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Chef</label>
            <input type="text" name='chef' placeholder="Enter coffee chef" className="w-full px-4 py-2 border rounded" />
          </div>
        </div>

        {/* Row 2: Supplier & Taste */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Supplier</label>
            <input type="text" name='Supplier' placeholder="Enter coffee supplier" className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Taste</label>
            <input type="text" name='taste' placeholder="Enter coffee taste" className="w-full px-4 py-2 border rounded" />
          </div>
        </div>

        {/* Row 3: Category & Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Category</label>
            <input type="text" name='category' placeholder="Enter coffee category" className="w-full px-4 py-2 border rounded" />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-gray-700">Details</label>
            <input type="text" name='Details' placeholder="Enter coffee details" className="w-full px-4 py-2 border rounded" />
          </div>
        </div>

        {/* Photo URL */}
        <div>
          <label className="block font-semibold mb-1 text-gray-700">Photo</label>
          <input type="text" name='photo' placeholder="Enter photo URL" className="w-full px-4 py-2 border rounded" />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#CBA87E] text-white font-semibold py-2 rounded hover:bg-[#b8936a] transition cursor-pointer"
          >
            Add Coffee
          </button>
        </div>
      </form>
        </div>
    );
};

export default Addcoffe;