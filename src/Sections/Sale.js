import React from 'react'
import ButtonThemeLight from '../Components/ButtonThemeLight'
import SaleProductGrid from '../Components/SaleProductGrid'


const Sale = ({saleProducts}) => {

  return (
    <section className="sale container-small">
        <div className="sale-content flex c-center">
            <div className="sale-text">
                <h1>Up to 70% off*</h1>
                <p>Women's, Men's & kids' Winter Fashion</p>
                <ButtonThemeLight text="FLASH SALE"/>
            </div>
        </div>

        <div className="sale-grid grid">
            <SaleProductGrid saleProducts={saleProducts} gridHeader="Featured Products"/>
            <SaleProductGrid saleProducts={saleProducts} gridHeader="Best Selling Products" />
            <SaleProductGrid saleProducts={saleProducts} gridHeader="Top Reacted Products" />


        </div>
    </section>
  )
}

export default Sale