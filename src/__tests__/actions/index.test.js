import * as a from '../../actions';

describe('coffee list actions', () => {
  test('if addCoffee will create an ADD_COFFEE action', () => {
    const newCoffee = {
      name: "Peppermint Hot Cocoa",
      description: "Strong peppermint infused with a deep chocolate flavor.",
      image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/10/18/0/FNK_Peppermint-Hot-Cocoa_s4x3.jpg.rend.hgtvcom.616.462.suffix/1383787064560.jpeg"
    }
    expect(a.addCoffee(newCoffee)).toEqual({
      type: 'ADD_COFFEE',
      name: newCoffee.name,
      description: newCoffee.description,
      image: newCoffee.image
    });
  });
});