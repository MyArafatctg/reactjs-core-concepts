import React, { useEffect, useState } from 'react';
import Showcountry from '../Showcountry/Showcountry';
import './Country.css';

const Country = () => {
    return (
        <div>
           <LoadCountries></LoadCountries>
        </div>
    );
};

function LoadCountries(){
    const [countrys, setCountries] = useState([]);
    useEffect(
      () =>{
          fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
          .then(data => setCountries(data))  
      },[]
    ) 
    return(
      <div>
        <h1>Load every country in the world</h1>
        <h3>Total Countries : {countrys.length}</h3>
        <div className="grid-container">
        {
          countrys.map(country => <Showcountry countries={country}></Showcountry>)
        }
        </div>
      </div>
    )
  }

export default Country;