import React from 'react'
import pamelaReifImage from '../Assets/Images/pamela-reif.svg'

const PamelaReif = () => {
  return (
    <div className="pamela-reif c-start">
        <img src={pamelaReifImage} alt="Pamela-Reif" />
        <div className="pamela-reif-content">
            <h1>Pamela Reif's<span>Top Picks</span></h1>
            <a className="button-theme-dark" href="#">
                <span className="button-theme-left"></span>
                SHOP NOW
                <span className="button-theme-right"></span>
            </a>
        </div>
    </div>
  )
}

export default PamelaReif