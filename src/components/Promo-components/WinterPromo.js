import React from 'react'
import armsOverHead from '../Assets/Images/arms-over-head.svg'

const WinterPromo = () => {
  return (
    <div className="winter-promo">
      <img src={armsOverHead} alt="arms-over-head" />
        <h1>Winter Clearance<span>Up to 70% Off!</span></h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.</p>
        <a className="button-theme-dark" href="#">
          <span className="button-theme-left"></span>
          SHOP NOW
          <span className="button-theme-right"></span>
        </a>
    </div>
  )
}

export default WinterPromo