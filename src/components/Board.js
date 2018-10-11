import React from 'react';

import Square from '../components/Square';

const boardLayout = [[0,1,2],[3,4,5],[6,7,8]]

const Board = ({status, squares, onClick}) => (
  <div className="game-board">
    <div>
      <div className="status">{status}</div>

      {boardLayout.map((row) =>
        <div className="board-row">
          <Square value={squares[row[0]]} onClick={() => onClick(row[0])}/>
          <Square value={squares[row[1]]} onClick={() => onClick(row[1])}/>
          <Square value={squares[row[2]]} onClick={() => onClick(row[2])}/>
        </div>
      )}

    </div>
  </div>

)

export default Board