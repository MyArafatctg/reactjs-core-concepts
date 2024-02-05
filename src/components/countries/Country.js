import React, { useEffect, useState } from 'react';
import Showcountry from '../Showcountry/Showcountry';
import './Country.css';
import '../../../package.json';

const Country = () => {
    return (
        <div>
           <LoadCountries></LoadCountries>
        </div>
    );
};

function LoadCountries(props){
    const [product, setProduct] = useState([]);
    useEffect(
      () =>{
          fetch('fakedb.json')
          .then(res => res.json())
          .then(data => setProduct(data))  //setCountries(data)
      },[]
    ) 
    return(
      <div>
        <Watch></Watch>
        <h1>ALL COUNTRY IN THE WORLD AND BANGLADESH ALSO</h1>
        <h3>Total Countries : {product.length}</h3>
        <div className="grid-container">
        {
          product.map(item => <Showcountry products={item} key={item.id}></Showcountry>)
        }
        </div>
      </div>
    )
  }

  const Watch = () => {
    const [step, setSteps] = useState(0);
      const increaseSetp = () => {
      const  nexStep = step + 1;
        setSteps(nexStep);
      }
    return (
      <div>
        <button onClick={increaseSetp}> Click me to change steps</button>
        <h3> You steps : {step} </h3>
        <Dail step={step}></Dail>
      </div>
    );
  };

  const Dail = (props) =>{
    return(
      <div>
        <div className="wraper">
          <h1>New Steps : {props.step}</h1>
        </div>
      </div>
    );
  };

export default Country;