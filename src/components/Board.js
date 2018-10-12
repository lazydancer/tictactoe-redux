import React from 'react';
import PropTypes from 'prop-types'
import Square from '../components/Square';

const boardLayout = [[0,1,2],[3,4,5],[6,7,8]]

const Board = ({status, squares, onClick}) => (
  <div className="game-board">
    <div>
      <div className="status">{status}</div>

      {boardLayout.map((row) =>
        <div className="board-row">
          <Square value={squares[row[0]]} onClick={() => onClick(row[0], squares)}/>
          <Square value={squares[row[1]]} onClick={() => onClick(row[1], squares)}/>
          <Square value={squares[row[2]]} onClick={() => onClick(row[2], squares)}/>
        </div>
      )}

    </div>
  </div>
)

Board.propTypes = {
  status: PropTypes.string.isRequired,
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
}

export default Board