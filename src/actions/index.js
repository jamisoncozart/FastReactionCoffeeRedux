import * as c from './ActionTypes';

export const addCoffee = newCoffee => {
  return {
    type: c.ADD_COFFEE,
    ...newCoffee
  }
}

export const changeCurrentCoffee = newCoffee => {
  
}