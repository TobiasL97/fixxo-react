import React from 'react'
import girlOnChair from '../Assets/Images/girl-on-chair.svg'
import personInCoat from '../Assets/Images/person-in-coat.svg'

function Showcase() {
  return (
    <section className="showcase">
        <div className="container flex c-center">
            <img className="img-left" src={girlOnChair} alt="Girl-on-chair"/>
            <div className="showcase-text">
                <h1>SALE UP<span>To 50% Off</span></h1>
                <p>Online shopping free home delivery $100</p>
                <a className="button-theme" href="#">
                    <span className="button-theme-left"></span>
                    SHOP NOW
                    <span className="button-theme-right"></span>
                </a>
            </div>
            <img className="img-right" src={personInCoat} alt="Person-in-coat"/>
        </div>
    </section>
  )
}

export default Showcase