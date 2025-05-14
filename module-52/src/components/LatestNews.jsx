import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-3 bg-base-200'>
            <p className='bg-secondary text-base-100 p-3'>latest</p>

            <Marquee pauseOnHover={true}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos laudantium eum vero sunt itaque minus vitae illum hic! Temporibus explicabo, necessitatibus nam eius voluptate sunt esse similique fugit nesciunt doloremque.</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;