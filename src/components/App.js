import React from 'react'

import BoardContainer from '../containers/BoardContainer'
import GameInfoContainer from '../containers/GameInfoContainer'

import './App.css'

const App = () => (
  <div className="game">
    <BoardContainer />
    <GameInfoContainer />
  </div>
)

export default App