import React from 'react'
import { useProductContext } from '../Contexts/ProductContext'
import { useEffect } from 'react'
import ProductGrid from '../Sections/ProductGrid'

const ProductDescription = () => {

    const { featuredProducts, getFeaturedProducts} = useProductContext()

    useEffect(() => {
        getFeaturedProducts(4)
      }, [])
  return (
    <div className="product-description">
        <div className="description-buttons">
            <button className="description-headers">Description</button>
            <button className="description-headers">Additional</button>
            <button className="description-headers">Shopping & Returns</button>
            <button className="description-headers">Reviews</button>
        </div>
        <div className="description-text">
            <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. </p>
            <p>* Village did removed enjoyed explain nor ham saw calling talking.</p>
            <p>* Securing as informed declared or margaret.</p>
            <p>* Joy horrible moreover man feelings own shy.</p>
            <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
        </div>
        <ProductGrid title="Related Products" products={featuredProducts}/>
    </div>
  )
}

export default ProductDescription