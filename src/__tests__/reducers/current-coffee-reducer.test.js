import currentCoffeeReducer from '../../reducers/current-coffee-reducer';

describe('currentCoffeeReducer', () => {
  test('if default state is returned when no action is given', () => {
    expect(currentCoffeeReducer(undefined, { type: null })).toEqual({});
  });
});