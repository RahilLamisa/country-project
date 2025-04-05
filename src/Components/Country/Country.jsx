import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {

    // console.log(handleVisitedCountries);

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(!visited)
        handleVisitedCountries(country)
    }

    return (
        <div className={`countryStyle ${visited && 'visited'}`}>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h3>Name : {country.name.common}</h3>
            <h4>Population : {country.population}</h4>
            <h4>Status : {country.status}</h4>
            <h4>Independent : {country.independent ? 'Yes' : 'Not yet'}</h4>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Visited Flags</button>
        </div>
    );
};

export default Country;