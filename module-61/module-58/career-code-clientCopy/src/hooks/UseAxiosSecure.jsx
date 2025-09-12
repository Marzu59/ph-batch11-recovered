import React, { useEffect } from 'react';
import UseAuth from './UseAuth';
import axios from 'axios';

    const axiosInstance = axios.create({
        baseURL: 'https://career-code-server-copy.vercel.app'
    })
 
const UseAxiosSecure = () => {
     const {user, signOutt } = UseAuth()


    // useEffect(()=>{

    //     if(user){
    //         axiosInstance.interceptors.request.use(config=>{
    //     config.headers.Authorization = `Bearer ${user.accessToken} `
    //     return config;
    //   });


    //     }
    // },[user])




      axiosInstance.interceptors.request.use(config=>{
        config.headers.Authorization = `Bearer ${user.accessToken}`
        return config;
      });

    //   axios interceptor
    axiosInstance.interceptors.response.use(response=> {
        return response
    }, error=>{
        console.log('error interceptor', error)
        if(error.status === 401 || error.status === 403){
                signOutt()
                .then(()=>{
                
                    console.log('signouut')
                })
                .catch(error=>{
                    console.log(error)
                }) 
        }
        
        return Promise.reject(error)
    })
       


    return axiosInstance ;
};

export default UseAxiosSecure;