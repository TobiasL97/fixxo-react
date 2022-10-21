import React, { useState } from 'react'
import ProductBoxFlexed from './ProductBoxFlexed'

const SaleProductGrid = ({gridHeader, saleProducts}) => {

  return (
    <div className="sale-product-grid grid">
      <h1>{gridHeader}</h1>
      {
        saleProducts.map(saleProduct => <ProductBoxFlexed saleProduct={saleProduct}/>)
      }
    </div>
  )
}

export default SaleProductGrid