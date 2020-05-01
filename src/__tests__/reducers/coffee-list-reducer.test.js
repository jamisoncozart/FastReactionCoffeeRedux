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
        id: action.id,
        name: action.name,
        description: action.description,
        image: action.image,
        quantity: 20
      }
    });
  });
  test('if a coffee is editted successfully', () => {
    const currentState = {
      '1': {
        id: '1',
        name: 'Noggaccino',
        description: 'Smooth eggnog with hints of nutmeg and cinammon',
        image: 'https://www.laweekly.com/wp-content/uploads/2019/05/xmascoffee_menottis.jpg',
        quantity: 20
      },
      '2': {
        id: '2',
        name: "Chai Cinnamon Latte",
        description: "Creamy blend of Chai with suttle hints of cinnamon churned to perfection.",
        image: "https://www.ohhowcivilized.com/wp-content/uploads/2013/01/0918-cha-tea-latte-16.jpg",
        quantity: 20
      }
    }
    const action = {
      type: 'ADD_COFFEE',
      id: '2',
      name: "Columbian Black",
      description: "Earthy and hearty with a crispt taste of raw coffee.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuyUYEfmi1zTzuT3huhXyHdh9Qnz0b0bIdvPI0TnfrTdi-KO6J&usqp=CAU"
    }
    expect(coffeeListReducer(currentState, action)).toEqual({
      '1': {
        id: '1',
        name: 'Noggaccino',
        description: 'Smooth eggnog with hints of nutmeg and cinammon',
        image: 'https://www.laweekly.com/wp-content/uploads/2019/05/xmascoffee_menottis.jpg',
        quantity: 20
      },
      '2': {
        id: '2',
        name: "Columbian Black",
        description: "Earthy and hearty with a crispt taste of raw coffee.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTuyUYEfmi1zTzuT3huhXyHdh9Qnz0b0bIdvPI0TnfrTdi-KO6J&usqp=CAU",
        quantity: 20
      }
    });
  });
});