import React from 'react';

const NewCoffeeForm = props => {
  return (
    <form className="NewCoffeeForm">
      <h2>Add New Brew</h2>
      <input placeholder="Brew Name" name="Name" />
      <input placeholder="Description" name="Description" />
      <button>Add Brew</button>
    </form>
  )
}

export default NewCoffeeForm;