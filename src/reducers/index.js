import coffeeListReducer from './coffee-list-reducer';
import showDetailsReducer from './show-details-reducer';
import currentCoffeeReducer from './current-coffee-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterCoffeeList: coffeeListReducer,
  showDetailsPage: showDetailsReducer,
  currentCoffee: currentCoffeeReducer
});

export default rootReducer;