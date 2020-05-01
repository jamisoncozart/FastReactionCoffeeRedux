import currentCoffeeReducer from '../../reducers/current-coffee-reducer';

describe('currentCoffeeReducer', () => {
  test('if default state is returned when no action is given', () => {
    expect(currentCoffeeReducer(undefined, { type: null })).toEqual({});
  });
  test('if currentCoffee is successfully updated with a coffee', () => {
    const action = {
      type: 'CHANGE_CURRENT_COFFEE',
      name: "Caramel Vanilla frappuccino",
      description: "Sticky Caramel mixed with a strong vanilla cream blended into medium roast.",
      image: "https://www.happyfoodstube.com/wp-content/uploads/2019/07/iced-caramel-latte-picture-500x500.jpg",
      quantity: 20
    }
    expect(currentCoffeeReducer(undefined, action)).toEqual({
      name: action.name,
      description: action.description,
      image: action.image,
      quantity: action.quantity
    })
  });
});