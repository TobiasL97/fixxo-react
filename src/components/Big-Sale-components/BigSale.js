import React from 'react'
import ButtonThemeLightFlash from '../Assets/ButtonThemeLightFlash'
import CategoryBoxFlexed from '../Assets/CategoryBoxFlexed'

const BigSale = () => {
  return (
    <section className="big-sale container-small">
        <div className="big-sale-content flex c-center">
            <div className="big-sale-text">
                <h1>Up to 70% off*</h1>
                <p>Women's, Men's & kids' Winter Fashion</p>
                <ButtonThemeLightFlash />
            </div>
        </div>
        <div className="big-sale-grid grid">
            <div className="latest-products-grid grid">
                <h1>Latest Products</h1>
                <CategoryBoxFlexed />
                <CategoryBoxFlexed />
                <CategoryBoxFlexed />
            </div>
            <div className="best-selling-products-grid grid">
                <h1>Best Selling Products</h1>
                <CategoryBoxFlexed />
                <CategoryBoxFlexed />
                <CategoryBoxFlexed />
            </div>
            <div className="top-reacted-products-grid grid">
                <h1>Top Reacted Products</h1>
                <CategoryBoxFlexed />
                <CategoryBoxFlexed />
                <CategoryBoxFlexed />
            </div>
        </div>
    </section>
  )
}

export default BigSale