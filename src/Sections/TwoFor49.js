import React from 'react'
import Offer from '../Components/Offer'
import ProductBox from '../Components/ProductBox'

const TwoFor49 = ({title, products = []}) => {
  return (
    <section className="shopping-grid-2-for-49 container">
        <Offer OfferText={title}/>
        <div className="product-grid grid">
          {
            products.map(product => <ProductBox key={product.articleNumber} product={product}/>)
          }
        </div>
    </section>
  )
}

export default TwoFor49