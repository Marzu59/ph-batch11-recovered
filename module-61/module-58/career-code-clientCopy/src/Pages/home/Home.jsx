import React, { Suspense } from 'react';
import Banner from '../Banner';
import HotJobs from './HotJobs';
// import { useLoaderData } from 'react-router';
import { jobsApii } from '../../Api/Jobs';
import UseAuth from '../../hooks/UseAuth';

const Home = () => {
        
//    console.log(user.accessToken)
    // const jobspromise = fetch('https://career-code-server-copy.vercel.app/jobs').then(res=>res.json())
    // const jobdata = useLoaderData()
    //     console.log(jobdata)
      
    
    


    return (
        <div>

             



             <Banner></Banner>
             <h1 className='text-center text-2xl '>    Null  </h1> 


             <Suspense fallback={'Wait'}>

                <HotJobs jobsApii={jobsApii()}></HotJobs>

             </Suspense>
             

        </div>
    );
};

export default Home;