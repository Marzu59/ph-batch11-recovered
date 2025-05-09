import React, { useState } from 'react';
import './Country.css'




const Country = ({country, handleVisitedCountries, handlevisitdFlag}) => {

    const [visted, setVisited] = useState(false)
    

   const handleVisited=()=>{
            if(visted === true){
                setVisited(false)
            }
            else{
                setVisited(true)
            }

            // setVisited(!visted)
         handleVisitedCountries(country);

         



         

   }

    return (
        <div className={`country ${visted  && 'country-visted'}`}>
            <p>Name: {country.name.common} </p>
            <p>Maps: {country.maps.googleMaps} </p>
            <img src={country.flags.png} alt="" />
            <p> Independent: {country.independent ? 'free': 'not free'} </p>
            <button onClick={handleVisited}> {  visted ? 'Visited': 'Not visited'
                } </button>

                <button onClick={()=>handlevisitdFlag(country.flags.png)}>add visited flag</button>


                <button onClick={()=>handlevisitdFlag(country.flags.png)}>add visited flag</button>

        </div>
    );
};

export default Country;