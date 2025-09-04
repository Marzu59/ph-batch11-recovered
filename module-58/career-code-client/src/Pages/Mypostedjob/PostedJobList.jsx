import React, { use, useState } from "react";
import { Link } from "react-router";

const PostedJobList = ({ JobCreatedbyPromise }) => {
  const jobs = use(JobCreatedbyPromise);
 

  return (
    <div>
      <h1>{jobs.length} </h1>
      {/* table start */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>title</th>
              <th>deadline</th>
              <th>view applications </th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {
                jobs.map((job, index)=> <tr key={job._id}>
              <th  >{index + 1}</th>
              <td>{job.title}</td>
              <td>{job.date}</td>
              <td><Link to={`/viewapplications/${job._id}`}> Applications </Link></td>
            </tr>)
            }
            
          </tbody>
        </table>
      </div>
      {/* table end */}
    </div>
  );
};

export default PostedJobList;
