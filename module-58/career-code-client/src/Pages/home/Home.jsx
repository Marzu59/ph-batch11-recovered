import React from 'react';
import Banner from '../Banner';
import HotJobs from './HotJobs';
import { useLoaderData } from 'react-router';

const Home = () => {
   
    // const jobspromise = fetch('http://localhost:3000/jobs').then(res=>res.json())
    const jobdata = useLoaderData()
        console.log(jobdata)

    return (
        <div>
             <Banner></Banner>
             <HotJobs jobdata={jobdata}></HotJobs>
        </div>
    );
};

export default Home;