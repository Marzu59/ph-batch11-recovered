import { format } from 'date-fns';
import React from 'react';

const Header = () => {
    return (
        <div className='flex  justify-center flex-col items-center gap-3'>
            <div>
                <img className='w-[350px' src= {'/logo.png'} alt="" />
            </div>
            
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'> { format(new Date(), "EEEE, MMMM dd, yyyy"  ) } </p>
        </div>
    );
};

export default Header;