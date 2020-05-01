import coffeeListReducer from '../../reducers/coffee-list-reducer';

describe('coffeeListReducer', () => {
  test('if default state is returned when no action type is given', () => {
    expect(coffeeListReducer(undefined, { type: null })).toEqual({});
  });
});