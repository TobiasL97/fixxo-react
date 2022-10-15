import React from 'react'
import NewArrivalsPromo from './NewArrivalsPromo'
import WinterPromo from './WinterPromo'

const Promo = () => {
  return (
    <section className="promo">
        <div className="container">
          <WinterPromo />
          <NewArrivalsPromo />
        </div>
    </section>
  )
}

export default Promo