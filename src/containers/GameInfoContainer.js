import { connect } from 'react-redux'
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

const mapDispatchToProps = (dispatch) => ({
  onClick: (x) => dispatch(({
    type: 'SELECT_HISTORY',
    id: x
  }))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameInfo)