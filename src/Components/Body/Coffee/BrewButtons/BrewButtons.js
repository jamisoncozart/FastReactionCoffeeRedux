import React from 'react';

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

export default BrewButtons;