import React from 'react'
import ReactDOM from 'react-dom';
import './AddArmy.scss'

export default function AddArmy() {
  return (
    <div className="addArmy">
      <section className="ranged army" draggable="true">Ranged</section>
      <section className="melee army" draggable="true">Melee</section>
      <section className="brute army" draggable="true">Brute</section>
      <section className="leader army" draggable="true">Leader</section>
    </div>
  )
}
