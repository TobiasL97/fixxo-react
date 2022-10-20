import React from 'react'
import ProductBox from '../Components/ProductBox'

const ProductGrid = ({title, products}) => {

  return (
    <section className="product-grid">
        <h1>{title}</h1>
        <div className="container-small grid">
            {
              products.map(product => <ProductBox key={product.id} product={product}/>)
            }
        </div>
    </section>
  )
}

export default ProductGrid