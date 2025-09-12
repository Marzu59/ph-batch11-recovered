import React, { Suspense } from 'react';
import Mystats from './Mystats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import UseApplicationApi from '../../Api/UseApplicationApi';




const Myapplications = () => {
      const {user } = UseAuth()
       const {myapplicationPromise} = UseApplicationApi()


    //    if(!user){
    //      return <h1> Waiting</h1>
    //    }

    return (
        <div>
           <Suspense fallback={'loading '}> 
          
            <ApplicationList   myapplicationPromise={myapplicationPromise(user.email)}></ApplicationList>
             </Suspense> 

            <Mystats></Mystats>
        </div>
    );
};

export default Myapplications;