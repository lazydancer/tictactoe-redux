import React from 'react'
import Move from '../components/Move';

const GameInfo = ({ status, moves, history }) => (
  
/* TODO Add the onclick method to the Move button! */

  <div className="game-info">
    <div>{status}</div>
    <ol>
    {moves.map((move) => 
      <Move 
        key={move.move} 
        move={move.move} 
        desc={move.desc} 
      />
    )}
    </ol>
  </div>
)

export default GameInfo