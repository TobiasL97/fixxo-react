import React, { useContext } from 'react'
import ButtonThemeLight from '../Components/ButtonThemeLight'
import SaleProductGrid from '../Components/SaleProductGrid'
import { productContext } from '../Contexts/contexts'


const Sale = () => {

  const ProductContext = useContext(productContext)

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
            <SaleProductGrid products={ProductContext.saleProductGrid} title="Featured Products"/>
            <SaleProductGrid products={ProductContext.saleProductGrid} title="Best Selling Products" />
            <SaleProductGrid products={ProductContext.saleProductGrid} title="Top Reacted Products" />


        </div>
    </section>
  )
}

export default Sale