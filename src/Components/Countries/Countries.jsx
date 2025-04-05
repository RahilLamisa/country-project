import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({fetchAllCountries}) => {

    const [visitedCountries, setVisitedCountries] =useState([])
    const [flags, setFlags] = useState([]);

    const countries = use(fetchAllCountries);

    const handleVisitedCountries = (country) => {
        console.log('clicked visited countries', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flag) => {
        console.log('visited flags', flag);
        const visitedFlags = [...flags,flag];
        setFlags(visitedFlags);
    }

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <h2>Traveled so far : {visitedCountries.length}</h2>
            <div className='imageResize'>
                {
                    flags.map((flag,i) => <img src={flag} key={i}></img>)
                }
            </div>
            <div className='threeColLayout'>
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;