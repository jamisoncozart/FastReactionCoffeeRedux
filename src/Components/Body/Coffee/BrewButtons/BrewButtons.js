import React from 'react';
import PropTypes from "prop-types";

const BrewButtons = props => {

  function handleClickPropogation(event) {
    return props.handleRefillingCoffeeQuantity(props.id);
  }

  return (
    <div className="BrewButtons">
      <button onClick={handleClickPropogation}>Refill</button>
      <div className="BrewQuantity">
        <p className="BrewAmount">{props.quantity}</p>
        <p className="cups">Cups</p>
      </div>
      <button onClick={() => props.handleDecrementingCoffeeQuantity(props.id)}>Tap</button>
    </div>
  )
}

BrewButtons.propTypes = {
  handleRefillingCoffeeQuantity: PropTypes.func,
  quantity: PropTypes.number,
  handleDecrementingCoffeeQuantity: PropTypes.func,
  id: PropTypes.string
}

export default BrewButtons;