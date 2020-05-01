const showDetailsReducer = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_DETAILS':
      return !state;
    default:
      return state;
  }
}

export default showDetailsReducer;