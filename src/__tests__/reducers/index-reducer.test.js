import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import coffeeListReducer from '../../reducers/coffee-list-reducer';
import currentCoffeeReducer from '../../reducers/current-coffee-reducer';
import showDetailsReducer from '../../reducers/show-details-reducer';

let store = createStore(rootReducer);

describe('rootReducer', () => {
  test('should return default state if no action is given', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterCoffeeList: {},
      showDetailsPage: false,
      currentBrew: {}
    });
  });
  test('if default value of coffeeListReducer is the same as the default of rootReducer', () => {
    expect(store.getState().masterCoffeeList).toEqual(coffeeListReducer(undefined, { type: null }));
  });
});