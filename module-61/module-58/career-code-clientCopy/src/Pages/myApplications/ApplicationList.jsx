import React, { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationList = ({ myapplicationPromise }) => {
  const data = use(myapplicationPromise);

  return (
    <div>
      <h1> length: {data.length}</h1>
      <h2> boro :{data.length} </h2>

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
            {/* rows fro all job application  */}
            
             {
                data?.map((application, index)=> <ApplicationRow key={application._id}  application={application} index={index}></ApplicationRow>)
             }
            
           
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
