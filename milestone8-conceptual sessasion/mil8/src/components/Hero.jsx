import React, { useState } from 'react';
import banner from '/banner.png'
import Button from './button';
const Hero = ({handleSearch}) => {
      const [searchText, setsearchText] = useState('')
      
 

    return (
        <div className='py-16 px-14'>
            
          <img className='mx-auto max-w-full md:max-w-md' src={banner} alt="" />
          <div className='text-center space-y-4'>
            <h1 className='font-thin text-7xl text-gray-900'>Browse, Search, View, Buy</h1>
            <p>Best place to browse, search, view details and purchase of top flagship phones
            of the current time - FlagshipFaceOff</p>

            <form onSubmit={(e)=>{
              handleSearch(e, searchText);
              // reset after search
              setsearchText('')
            }

            }
             className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                <input value={searchText}
                       onChange={(e)=> setsearchText(e.target.value)}
                  className='focus:outline-none focus:shadow-outline md:h-12 md:w-2/3 p-2 border border-gray-500 bg-white rounded-md shadow-md' type="text" placeholder='search' />
                {/* <button type='submit' href="#_" className="relative inline-block text-lg group">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Search</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button> */}
             <Button type={'submit'} label={'search'} />

            </form>
          </div>

        </div>
    );
};

export default Hero;