import coffeeListReducer from '../../reducers/coffee-list-reducer';

describe('coffeeListReducer', () => {
  test('if default state is returned when no action type is given', () => {
    expect(coffeeListReducer(undefined, { type: null })).toEqual({});
  });
  test('if a new coffee is added to the list', () => {
    const action = {
      type: 'ADD_COFFEE',
      id: '1',
      name: 'Noggaccino',
      description: 'Smooth eggnog with hints of nutmeg and cinammon',
      image: 'https://www.laweekly.com/wp-content/uploads/2019/05/xmascoffee_menottis.jpg'
    }
    expect(coffeeListReducer(undefined, action)).toEqual({
      '1': {
        name: action.name,
        description: action.description,
        image: action.image
      }
    });
  });
});