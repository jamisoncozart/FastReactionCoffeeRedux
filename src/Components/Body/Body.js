import React from 'react';
import Coffee from './Coffee/Coffee';
import NewCoffeeForm from './NewCoffeeForm/NewCoffeeForm';
import BrewDetails from './BrewDetails/BrewDetails';

const Body = props => {
  return (
    <React.Fragment>
      <div className="Coffees">
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
      </div>
      <NewCoffeeForm />
      <BrewDetails />
    </React.Fragment>
  )
}

export default Body;