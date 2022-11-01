import React, { useContext } from 'react'
import ProductBox from '../Components/ProductBox'
import { productContext } from '../Contexts/contexts'

const ProductGrid = ({title}) => {

  const products = useContext(productContext)

  return (
    <section className="product-grid">
        <h1>{title}</h1>
        <div className="container-small grid">
            {
              products.map(product => <ProductBox key={product.articleNumber} product={product}/>)
            }
        </div>
    </section>
  )
}

export default ProductGrid