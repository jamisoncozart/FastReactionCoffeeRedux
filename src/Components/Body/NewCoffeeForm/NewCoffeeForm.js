import React from 'react';
import { v4 } from 'uuid';

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
      <input placeholder="Brew Name" name="Name" />
      <input placeholder="Description" name="Description" />
      <input placeholder="Image URL" name="Image" />
      <button>Add Brew</button>
    </form>
  )
}

export default NewCoffeeForm;