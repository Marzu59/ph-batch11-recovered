import { el } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNEws = () => {

    const {id} = useParams();
    const data = useLoaderData();
    //  console.log(data)
    const [ categoryNews , setcategoryNews ] = useState([])
      
    useEffect(()=>{
        if(id == "0"){
            setcategoryNews(data)
            return
        } 
        else if(id == "1") {
            const filteredNews = data.filter((news)=> news.others.is_today_pick == true );
            
            setcategoryNews(filteredNews)
        } 
        else{
            const filteredNewss = data.filter((news)=> news.category_id == id);
            setcategoryNews(filteredNewss)

        }


    }, [data, id])
     





    return (
        <div>
            <h1> Category News id: {id}  </h1> 
            <h1> news amount by category : {categoryNews.length} </h1>

            <div className='grid grid-cols-1 gap-5'>

                 {
                    categoryNews.map((news)=> <NewsCard key={news.id} news={news}> </NewsCard> )
                 }

            </div>





        </div>
    );
};

export default CategoryNEws;