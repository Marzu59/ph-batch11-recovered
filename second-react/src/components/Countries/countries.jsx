import React, { use, useState } from 'react';
import Country from './country';
import './countries.css';

const Countries = ({ countriespromis }) => {
  const countries = use(countriespromis);

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [vistedFlags, setVisitedFlags] = useState([]);

  const handlevisitdFlag = (flag) => {
    const newVisttedFlags = [...vistedFlags, flag];
    setVisitedFlags(newVisttedFlags);
  };

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h1>Travelling countries: {countries.length}</h1>
      <h2>Travelled so far: {visitedCountries.length}</h2>

      <ol>
        {visitedCountries.map((contyy) => (
          <li key={contyy.cca3}>{contyy.name.common}</li>
        ))}
        <div className="visited-flags-container">
          {vistedFlags.map((visitedflag, index) => (
            <img key={index} src={visitedflag} alt="Visited Flag" />
          ))}
        </div>
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
            handlevisitdFlag={handlevisitdFlag}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;






