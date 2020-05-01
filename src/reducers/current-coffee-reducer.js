const currentCoffeeReducer = (state = {}, action) => {
  const { name, description, image, quantity } = action;
  switch(action.type) {
    case 'CHANGE_CURRENT_COFFEE':
      const newState = {
        name: name,
        description: description,
        image: image,
        quantity: quantity
      }
      return newState;
    default:
      return state;
  }
}

export default currentCoffeeReducer;