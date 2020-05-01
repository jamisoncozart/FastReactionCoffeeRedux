const coffeeListReducer = (state = {}, action) => {
  switch(action.type) {
    case 'ADD_COFFEE':
      const { id, name, description, image } = action;
      const newState = {
        ...state,
        [id]: {
          name: name,
          description: description,
          image: image
        }
      }
      return newState;
    default:
      return state;
  }
}

export default coffeeListReducer;