import React from 'react';
import './Showcountry.css';

const Showcountry = (props) => {
    // console.log(props.countries)
        const {name, area, population, flags} = props.countries;
        // console.log(area,population);
    return (
        <div className="cnt-div">
            <h1>Name : {name.common}</h1>
            <h3>Aria : {area}</h3>
            <p>Population : {population}</p>
            <img src={flags.png} alt="flags" />
        </div>
    );
};

export default Showcountry; 