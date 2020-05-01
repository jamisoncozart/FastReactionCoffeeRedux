import showDetailsReducer from '../../reducers/show-details-reducer';

describe('showDetailsReducer', () => {
  test('if the default state is returned when no actions are given', () => {
    expect(showDetailsReducer(undefined, { type: null })).toEqual(false);
  });
  test('if the current state of showDetails is toggled', () => {
    const action = {
      type: 'TOGGLE_DETAILS'
    }
    expect(showDetailsReducer(undefined, action)).toEqual(true);
  })
});