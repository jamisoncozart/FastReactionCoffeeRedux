import React from 'react';
import PropTypes from "prop-types";

const BrewDetails = props => {
  return (
    <div className="BrewDetails">
      <div className="DetailsImageDiv">
        <img src={props.image} alt="Coffee Profile" />
      </div>
      <h2>{props.name}</h2>
      <p className="BrewDescription">{props.description}</p>
      <button onClick={props.handleBackToMainPage}>Back to Brews</button>
    </div>
  )
}

BrewDetails.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  handleBackToMainPage: PropTypes.func
}

export default BrewDetails;