import React from 'react'
import girlOnChair from './Images/girl-on-chair.svg'
import personInCoat from './Images/person-in-coat.svg'
import ButtonTheme from '../components/Assets/Images/ButtonTheme'

const Showcase = () => {
  return (
  <section className="showcase">
    <div className="container flex c-center">
      <img className="img-left" src={girlOnChair} alt="Girl-on-chair" />
      <div className="showcase-text">
        <h1>SALE UP<span>To 50% Off</span></h1>
        <p>Online shopping free home delivery $100</p>
        <ButtonTheme />
      </div>
      <img className="img-right" src={personInCoat} alt="person-in-coat" />
    </div>
  </section>
  )
}

export default Showcase