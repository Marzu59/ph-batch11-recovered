import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Rightaside from '../components/Rightaside';
import { useLoaderData, useParams } from 'react-router';
import NewDetailsCard from '../components/newDetailsCard/NewDetailsCard';

const NewsDetails = () => {
  const data = useLoaderData()
//   console.log(data)
 const {id} = useParams()
//   console.log(id,)
const [news, setnews]= useState({})


useEffect(()=>{
     const newsdetails = data.find(singleNews=>  singleNews.id == id);
       setnews(newsdetails)

}, [data, id])



    return (
        <div>
            <header>
                 <Header></Header>
            </header>
          <main className='w-11/12 mx-auto grid grid-cols-12 gap-3'>

          <section className='col-span-9'>
           <h2>News details</h2>
             <NewDetailsCard  news={news}></NewDetailsCard>
          </section>
    
          <section className='col-span-3'>
         
             <Rightaside></Rightaside>
          </section>

          </main>


        </div>
    );
};

export default NewsDetails;