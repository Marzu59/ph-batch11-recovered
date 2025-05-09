import React, { useEffect, useState } from 'react';
import Blog from '../blog/blog';

const Blogs = ({handleBookmark, handleMarkasRead}) => {
  const [blogs, setBlogs]= useState([]);

  useEffect(()=>{
    fetch('blogs.json')
    .then(res=> res.json())
    .then(data=> setBlogs(data))
  }, [])


    return (
        <div>
            <h4>Total: {blogs.length}</h4>
            <div className="all-blogs grid grid-cols-2">
              {
                blogs.map((blog)=><Blog blog={blog} handleBookmark={handleBookmark} handleMarkasRead={handleMarkasRead}></Blog>)
              }
            </div>


        </div>
    );
};

export default Blogs;