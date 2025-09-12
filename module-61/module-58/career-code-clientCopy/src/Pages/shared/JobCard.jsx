import React from 'react';
import { Link } from 'react-router';

const JobCard = ({job}) => {
    const {requirements, applicationDeadline, description, jobType, location, hr_name, company_logo, company, category, responsibilities, salaryRange, status, title, _id}= job
    
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={company_logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {title}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <h2> Salary: {salaryRange.min}-{salaryRange.max} {salaryRange.currency} </h2>
    <p>{description}</p>
    <div className="card-actions ">
      {
        requirements.map(required=> <div className="badge badge-outline">{required}</div>)
      }
      
    </div>
  </div>
   <div className="justify-end card-actions">
    <Link to={`jobdetails/${_id}`}> <button  className="btn btn-primary">Apply Now</button></Link>  
    </div>
</div>
    );
};

export default JobCard;