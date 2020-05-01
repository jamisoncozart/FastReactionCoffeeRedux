const coffeeListReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_COFFEE':
      const { id, name, description, image } = action;
      const newState = {
        ...state,
        [id]: {
          id: id,
          name: name,
          description: description,
          image: image,
          quantity: 20
        }
      }
      return newState;
    default:
      return state;
  }
}

export default coffeeListReducer;