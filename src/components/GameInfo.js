import React from 'react'

const GameInfo = ({ status, moves, history }) => (
  


  <div className="game-info">
    <div>{status}</div>
    <ol>{moves}</ol>
  </div>
)

export default GameInfo