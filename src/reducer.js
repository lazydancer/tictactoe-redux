let initialState =  {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MOVE':

      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();

/*
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
*/      
      squares[action.id] = state.xIsNext ? 'X' : 'O';
      
      let newState = {
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
      }

      return newState

    case 'SELECT_HISTORY':

      const changes = {
        stepNumber: action.id ,
        xIsNext: (action.id  % 2) === 0
      }

      return {...state, ...changes}
  
    default:
      return state
    }
}

export default reducer