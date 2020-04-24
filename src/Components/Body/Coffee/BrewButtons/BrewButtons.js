import React from 'react';

const BrewButtons = props => {
  return (
    <div className="BrewButtons">
      <button>Refill</button>
      <p className="BrewAmount">{props.quantity}</p>
      <p className="cups">Cups</p>
      <button>Tap</button>
    </div>
  )
}

export default BrewButtons;