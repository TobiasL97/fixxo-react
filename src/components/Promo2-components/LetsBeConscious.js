import React from 'react'
import letsBeConsciousImage from '../Assets/Images/lets-be-conscious.svg'

const LetsBeConscious = () => {
  return (
    <div className="lets-be-conscious flex c-end">
        <img src={letsBeConsciousImage} alt="Mountain-of-clothes" />
        <div className="lets-be-conscious-content">
            <h1>Let's be<span>Conscious</span></h1>
            <a className="button-theme-light" href="#">
                <span className="button-theme-left"></span>
                SHOP NOW
                <span className="button-theme-right"></span>
            </a>
        </div>
    </div>
  )
}

export default LetsBeConscious