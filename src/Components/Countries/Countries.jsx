import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({fetchAllCountries}) => {

    const [visitedCountries, setVisitedCountries] =useState([])

    const countries = use(fetchAllCountries);

    const handleVisitedCountries = (country) => {
        console.log('clicked visited countries', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    return (
        <div>
            <h1>Countries : {countries.length}</h1>
            <h2>Traveled so far : {visitedCountries.length}</h2>
            <div className='threeColLayout'>
            {
                countries.map(country => <Country 
                    key={country.cca3} 
                    handleVisitedCountries={handleVisitedCountries}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;