import React from 'react'
import leaningBoy from '../Assets/Images/leaningboy.svg'

const NewArrivalsPromo = () => {
  return (
    <div className="new-arrivals-promo">
        <img className="leaning-boy" src={leaningBoy} alt="leaning-boy" />   
        <h1>New<span>Arrivals</span></h1>
        <a className="button-theme-dark" href="#">
            <span className="button-theme-left"></span>
            SHOP NOW
            <span className="button-theme-right"></span>
        </a>
    </div>
  )
}

export default NewArrivalsPromo