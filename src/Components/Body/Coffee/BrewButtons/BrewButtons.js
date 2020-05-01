import React from 'react';
import PropTypes from "prop-types";

const BrewButtons = props => {

  function hideTapIfSoldOut() {
    console.log(props.quantity);
    if(props.quantity <= 0) {
      return;
    } else {
      return <button onClick={() => props.handleDecrementingCoffeeQuantity(props.id)}>Tap</button>
    }
  }

  return (
    <div className="BrewButtons">
      <button onClick={() => props.handleRefillingCoffeeQuantity(props.id)}>Refill</button>
      <div className="BrewQuantity">
        <p className="BrewAmount">{props.quantity}</p>
        <p className="cups">Cups</p>
      </div>
      {hideTapIfSoldOut()}
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