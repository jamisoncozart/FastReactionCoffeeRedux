import showDetailsReducer from '../reducers/show-details-reducer';

describe('showDetailsReducer', () => {
  test('if the default state is returned when no actions are given', () => {
    expect(showDetailsReducer(undefined, { type: null })).toEqual(false);
  })
})