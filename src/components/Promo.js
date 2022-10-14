import React from 'react'
import armsOverHead from '../Assets/Images/arms-over-head.svg'
import leaningboy from '../Assets/Images/leaningboy.svg'

const Promo = () => {
  return (
    <section className="promo">
        <div className="container">
            <div className="winter-promo">
                <img src={armsOverHead} alt="Girl-with-arms-over-head"/>
                <h1>Winter Clearance<span>Up to 70% Off!</span></h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
                <a className="button-theme-dark" href="#">
                <span className="button-theme-left"></span>
                SHOP NOW
                <span className="button-theme-right"></span>
                </a>
            </div>
            <div className="new-arrivals-promo">
                <img className="leaning-boy" src={leaningboy} alt="Leaning-boy"/>
                <h1>New<span>Arrivals</span></h1>
                <a className="button-theme-dark" href="#">
                <span className="button-theme-left"></span>
                SHOP NOW
                <span className="button-theme-right"></span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Promo