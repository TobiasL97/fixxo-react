import React from 'react'
import ButtonThemeLightFlash from '../Assets/ButtonThemeLightFlash'
import CategoryBox from '../Assets/CategoryBox'

const TwoFor49 = () => {
  return (
    <section className="shopping-grid-2-for-49 container">
        <div className="two-for-49">
            <div className="two-for-49-content">
                <h1>2 FOR USD $49</h1>
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

export default TwoFor49