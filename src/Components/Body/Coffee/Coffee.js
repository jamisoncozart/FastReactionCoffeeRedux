import React from 'react';
import BrewButtons from './BrewButtons/BrewButtons';

const Coffee = props => {
  return (
    <div onClick={() => props.handleShowCoffeeDetails(props.id)} className="Coffee">
      <img src={props.image} />
      <h3>{props.name}</h3>
      <BrewButtons quantity={props.quantity} />
    </div>
  )
}

export default Coffee;