import React from 'react'
import Offer from '../Components/Offer'
import ProductBox from '../Components/ProductBox'

const TwoFor49 = ({TwoFor49Products}) => {
  return (
    <section className="shopping-grid-2-for-49 container">
        <Offer OfferText="2 FOR USD $49"/>
        <div className="product-grid grid">
          {
            TwoFor49Products.map(product => <ProductBox key={product.id} product={product}/>)
          }
        </div>
    </section>
  )
}

export default TwoFor49