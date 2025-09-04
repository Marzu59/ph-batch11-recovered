import React, { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import PostedJobList from './PostedJobList';
import { JobCreatedbyPromise } from '../../Api/JobsApi';

const MyPostedJobs = () => {
   const {user} = UseAuth()
     
     
    return (
        <div>

            <h2>My Posted Jobs: </h2>
            <Suspense fallback={'wait'}>
                <PostedJobList JobCreatedbyPromise={JobCreatedbyPromise(user.email)} ></PostedJobList>
            </Suspense>
            
        </div>
    );
};

export default MyPostedJobs;