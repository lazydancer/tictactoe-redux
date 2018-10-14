import { connect } from 'react-redux'
import { addMove } from '../actions'
import Board from '../components/Board'

const calculateWinner = squares => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const getStatus = state => {
  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares);

  if (winner) {
    return 'Winner: ' + winner;
  } else {
    return 'Next player: ' + (state.xIsNext ? 'X' : 'O');
  }

}

const getSquares = state => {
  const history = state.history;
  const current = history[state.stepNumber];

  return current.squares;
}


const mapStateToProps = state => ({
  status: getStatus(state),
  squares: getSquares(state),
})

const mapDispatchToProps = dispatch => ({
  onClick: (x, squares) => {
  if(squares[x] || calculateWinner(squares)){
    return
  }
  dispatch(addMove(x))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)