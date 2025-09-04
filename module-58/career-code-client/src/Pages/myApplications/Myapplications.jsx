import React, { Suspense } from 'react';
import Mystats from './Mystats';
import ApplicationList from './ApplicationList';
import UseAuth from '../../hooks/UseAuth';
import { myApplicationPromise } from '../../Api/ApplicationApi';



const Myapplications = () => {
      const {user } = UseAuth()

    return (
        <div>
           <Suspense fallback={'loading '}> 
            <ApplicationList myApplicationPromise={myApplicationPromise(user.email)}></ApplicationList>
             </Suspense> 

            <Mystats></Mystats>
        </div>
    );
};

export default Myapplications;