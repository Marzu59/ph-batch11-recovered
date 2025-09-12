import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
  const {requirements, applicationDeadline, description, jobType, location, hr_name, company_logo, company, category, responsibilities, salaryRange, status, title, _id} = useLoaderData()
  console.log(title)

    return (
        <div>
            <h1>{title}</h1>
          <Link to={`/jobapply/${_id}`}><button className='btn btn-primary'>Apply Now</button> </Link>  


        </div>
    );
};

export default JobDetails;