import React from 'react'
import './EnemyAddArmy.scss'

export default function EnemyAddArmy() {
  return (
    <div className="enemyAddArmy">
      <section className="ranged army" draggable="true">Enemy Ranged</section>
      <section className="melee army" draggable="true">Enemy Melee</section>
      <section className="brute army" draggable="true">Enemy Brute</section>
      <section className="leader army" draggable="true">Enemy Leader</section>
    </div>
  )
}
