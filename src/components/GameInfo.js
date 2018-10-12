import React from 'react'
import PropTypes from 'prop-types'

import Move from '../components/Move';

const GameInfo = ({ moves, onClick }) => (

  <div className="game-info">
    <ol>
    {moves.map((move) => 
      <Move 
        key={move.move} 
        move={move.move} 
        desc={move.desc}
        onClick={() => onClick(move.move)}
      />
    )}
    </ol>
  </div>
)

GameInfo.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.shape({
    move: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onClick: PropTypes.func.isRequired
}


export default GameInfo