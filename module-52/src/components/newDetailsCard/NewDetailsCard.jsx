import React from 'react';
import { Link } from 'react-router';

const NewDetailsCard = ({news}) => {


    return (
        <div> 
            <img className='object-cover w-full rounded-2xl' src={news.image_url} alt="" />
            <h1 className='font-bold'>{news.title} </h1>
            <p> {news.details} </p>
            
           <Link to={`/category/${news.category_id}`}><button className='text-white bg-[#D72050] font-semibold px-4 py-2'>All news In this category</button> </Link> 
            
        </div>
    );
};

export default NewDetailsCard;