import reducer from './reducer'

describe('reducer', () => {
  it('should handle inital state', () => {
    expect(reducer(undefined, {}))
      .toEqual({
        history: [{squares: Array(9).fill(null),}],
        stepNumber: 0,
        xIsNext: true
      });
  })

  it('should handle ADD_MOVE', () => {

    expect(reducer(undefined, { //First move
      type: 'ADD_MOVE',
      id: 0
    }))
      .toEqual({
        history: [{squares: Array(9).fill(null)},
                  {squares: ['X',null,null,null,null,null,null,null,null]}],
        stepNumber: 1,
        xIsNext: false
      });  


    expect(reducer( // Second move
      {
        history: [{squares: Array(9).fill(null)},
                  {squares: ['X',null,null,null,null,null,null,null,null]},],
        stepNumber: 1,
        xIsNext: false
      }
    , {
        type: 'ADD_MOVE',
        id: 1
      }))

    .toEqual({
        history: [{squares: Array(9).fill(null)},
                  {squares: ['X',null,null,null,null,null,null,null,null]},
                  {squares: ['X','O',null,null,null,null,null,null,null]}],
        stepNumber: 2,
        xIsNext: true
      });  

  })

  it('should handle SELECT_HISTORY', () => {

    expect(reducer(
      {
        history: [{squares: Array(9).fill(null)},
                  {squares: ['X',null,null,null,null,null,null,null,null]},
                  {squares: ['X','O',null,null,null,null,null,null,null]}],
        stepNumber: 2,
        xIsNext: true
      }
    , {
        type: 'SELECT_HISTORY',
        id: 1
      }))

    .toEqual({
        history: [{squares: Array(9).fill(null)},
                  {squares: ['X',null,null,null,null,null,null,null,null]},
                  {squares: ['X','O',null,null,null,null,null,null,null]}],
        stepNumber: 1,
        xIsNext: false
      });  

  })


})