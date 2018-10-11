import React from 'react'

const Move = ({move, desc, onClick}) => (
  <li>
    <button onClick={onClick}>{desc}</button>
  </li>
)

export default Move