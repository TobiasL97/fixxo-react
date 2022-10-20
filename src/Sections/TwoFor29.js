import React from 'react'
import Offer from '../Components/Offer'
import ProductBox from '../Components/ProductBox'

const TwoFor29 = ({TwoFor29Products}) => {
  return (
    <section className="shopping-grid container">
        <Offer OfferText="2 FOR USD $29"/>
        <div className="product-grid grid">
          {
            TwoFor29Products.map(product => <ProductBox key={product.id} product={product}/>)
          }
        </div>
    </section>
  )
}

export default TwoFor29