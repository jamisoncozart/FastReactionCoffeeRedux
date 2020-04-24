import React from 'react';

const BrewDetails = props => {
  return (
    <div className="BrewDetails">
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p className="BrewDescription">{props.description}</p>
      <button onClick={props.handleBackToMainPage}>Back to Brews</button>
    </div>
  )
}

export default BrewDetails;