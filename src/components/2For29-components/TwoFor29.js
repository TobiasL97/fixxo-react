import React from 'react'
import ButtonThemeLightFlash from '../Assets/ButtonThemeLightFlash'
import CategoryBox from '../Assets/CategoryBox'

const TwoFor29 = () => {
  return (
    <section className="shopping-grid container">
        <div className="two-for-29">
          <div className="two-for-29-content">
            <h1>2 FOR USD $29</h1>
            <ButtonThemeLightFlash />
          </div>
        </div>
        <div className="product-grid grid">
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
          <CategoryBox />
        </div>
    </section>
  )
}

export default TwoFor29