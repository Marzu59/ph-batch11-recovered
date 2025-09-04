import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";

const ViewApplications = () => {
  const { id } = useParams();
  const data = useLoaderData();
  console.log(data);

  const handlestatusChange=(e, _id)=>{
    e.preventDefault();
         const form = e.target.value;
         axios.patch(`http://localhost:3000/applications/job/${_id}`, {status: form})
         .then(res=> {
            // console.log(res.data)
            if(res.data.matchedCount){
                alert('Data Modified')
            }
         })
         .catch(error=>{
            console.log(error)
         })

  }



  return (
    <div>
      <h1>
        {" "}
        {data.length} job applications received for this Job id: {id}{" "}
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {/* rows*/}
            {data.map((singleApplication, index) => (
              <tr key={singleApplication._id}>
                <th>{index + 1}</th>
                <td>{singleApplication.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select onChange={(e)=>handlestatusChange(e, singleApplication._id)} defaultValue={singleApplication.status} className="select">
                    <option disabled={true}>Select One</option>
                    <option>Pending</option>
                    <option>Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
