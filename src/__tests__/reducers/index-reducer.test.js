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
      currentCoffee: {}
    });
  });
  test('if default value of coffeeListReducer is the same as the default of rootReducer', () => {
    expect(store.getState().masterCoffeeList).toEqual(coffeeListReducer(undefined, { type: null }));
  });
  test('if default value of currentCoffeeReducer is the same as the default of rootReducer', () => {
    expect(store.getState().currentCoffee).toEqual(currentCoffeeReducer(undefined, { type: null }));
  });
  test('if default value of showDetailsReducer is the same as the default of rootReducer', () => {
    expect(store.getState().showDetailsPage).toEqual(showDetailsReducer(undefined, { type: null }));
  });
  test('if value of coffeeListReducer is the same as rootReducer', () => {
    const action = {
      type: 'ADD_COFFEE',
      name: 'good joe',
      description: 'just a good cup of joe',
      image: 'no joe here'
    }
    store.dispatch(action);
    expect(store.getState().masterCoffeeList).toEqual(coffeeListReducer(undefined, action));
  });
  test('if value of currentCoffeeReducer is the same as rootReducer', () => {
    const action = {
      type: 'CHANGE_CURRENT_COFFEE',
      name: 'good joe',
      description: 'just a good cup of joe',
      image: 'no joe here',
      quantity: 20
    }
    store.dispatch(action);
    expect(store.getState().currentCoffee).toEqual(currentCoffeeReducer(undefined, action));
  });
  test('if value of showDetailsReducer is the same as rootReducer', () => {
    const action = {
      type: 'TOGGLE_DETAILS'
    }
    store.dispatch(action);
    expect(store.getState().showDetailsPage).toEqual(showDetailsReducer(undefined, action));
  });
});