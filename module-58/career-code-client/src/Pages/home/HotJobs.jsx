import React from 'react';
import JobCard from '../shared/jobCard';






const HotJobs = ({jobdata}) => {
       
    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-3 grid-cols-1'>
            
            {jobdata.map(job=><JobCard key={job._id} job={job}></JobCard>)}

            
            
        </div>
    );
};

export default HotJobs;