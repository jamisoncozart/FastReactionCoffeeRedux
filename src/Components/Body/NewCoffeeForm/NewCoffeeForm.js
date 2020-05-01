import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

const NewCoffeeForm = props => {

  function handleNewBrewSubmit(event) {
    event.preventDefault();
    props.onNewBrewCreation({
      id: v4(),
      name: event.target.Name.value,
      description: event.target.Description.value,
      image: event.target.Image.value,
      quantity: 20
    });
  }

  return (
    <form onSubmit={handleNewBrewSubmit} className="NewCoffeeForm">
      <h2>Add New Brew</h2>
      <input placeholder="Brew Name" name="Name" required/>
      <input placeholder="Description" name="Description" required/>
      <input placeholder="Image URL" name="Image" />
      <button>Add Brew</button>
    </form>
  )
}

NewCoffeeForm.propTypes = {
  onNewBrewCreation: PropTypes.func
}

export default NewCoffeeForm;