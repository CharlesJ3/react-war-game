import React from 'react'
import AddArmy from '../AddArmy/AddArmy'
import EnemyAddArmy from '../EnemyAddArmy/EnemyAddArmy'
import GameVisuals from '../GameVisuals/GameVisuals'
import './GameArea.scss'

export default function GameArea() {
  return (
    <div className="gameArea">
      <EnemyAddArmy />
      <GameVisuals />
      <AddArmy />
    </div>
  )
}
