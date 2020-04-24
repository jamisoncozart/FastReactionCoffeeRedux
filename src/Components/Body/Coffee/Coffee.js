import React from 'react';
import BrewButtons from './BrewButtons/BrewButtons';
import PropTypes from "prop-types";

const Coffee = props => {
  return (
    <div className="Coffee">
      <div onClick={() => props.handleShowCoffeeDetails(props.id)} className="imgDiv">
        <img src={props.image} alt="Coffee Profile" />
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

Coffee.propTypes = {
  handleShowCoffeeDetails: PropTypes.func,
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  handleDecrementingCoffeeQuantity: PropTypes.func,
  handleRefillingCoffeeQuantity: PropTypes.func
}

export default Coffee;