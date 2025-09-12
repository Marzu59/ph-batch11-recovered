import React from 'react';
import UseAxiosSecure from '../hooks/UseAxiosSecure';

const UseApplicationApi = () => {
  const axiosSecure = UseAxiosSecure()
   
  const myapplicationPromise = email =>{
      return  axiosSecure.get(`/applications?email=${email}`)
      .then(res=> res.data)

  }

    return {     myapplicationPromise
    };
};

export default UseApplicationApi;