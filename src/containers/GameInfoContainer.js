import { connect } from 'react-redux'
import { selectHistory } from '../actions'
import GameInfo from '../components/GameInfo'

const getMoves = (state) => {
  const history = state.history
  const moves = history.reduce((acc, step, move) => {

    const desc = move ?
      'Go to move #' + move :
      'Go to game start';      

    let result = acc.concat([{
      move: move,
      desc: desc
    }])

    return result
  }, [])

  return moves;
}

const mapStateToProps = (state) => ({
  moves: getMoves(state)
})

export default connect(
  mapStateToProps,
  { onClick: selectHistory }
)(GameInfo)