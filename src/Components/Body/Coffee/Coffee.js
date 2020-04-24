import React from 'react';
import BrewButtons from './BrewButtons/BrewButtons';

const Coffee = props => {
  return (
    <div className="Coffee">
      <div className="imgDiv">
        <img onClick={() => props.handleShowCoffeeDetails(props.id)} src={props.image} />
      </div>
      <div className="CoffeeInfo">
        <h3>{props.name}</h3>
        <BrewButtons 
        handleDecrementingCoffeeQuantity={props.handleDecrementingCoffeeQuantity} 
        quantity={props.quantity}
        handleRefillingCoffeeQuantity={props.handleRefillingCoffeeQuantity}
        id={props.id} />
      </div>
    </div>
  )
}

export default Coffee;