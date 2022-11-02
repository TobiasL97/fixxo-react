import React, { useState } from 'react'
import ProductBoxFlexed from './ProductBoxFlexed'

const SaleProductGrid = ({title, products = []}) => {

  return (
    <div className="sale-product-grid grid">
      <h1>{title}</h1>
      {
        products.map(product => <ProductBoxFlexed key={product.articleNumber} product={product}/>)
      }
    </div>
  )
}

export default SaleProductGrid