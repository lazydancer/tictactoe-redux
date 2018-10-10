import reducer from './reducer'

describe('reducer', () => {
  it('should handle inital state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
        history: [{squares: Array(9).fill(null),}],
        stepNumber: 0,
        xIsNext: true
      });
  })
/*
  it('should handle ADD_MOVE', () => {
    expect(
      
    )
  })
*/
})