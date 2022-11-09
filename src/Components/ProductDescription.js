import React, { useState } from 'react'
import { useProductContext } from '../Contexts/ProductContext'
import { useEffect } from 'react'
import ProductGrid from '../Sections/ProductGrid'

const ProductDescription = () => {

    const { relatedProducts, getRelatedProducts} = useProductContext()

    useEffect(() => {
        getRelatedProducts(4)
      }, [])

      const [description, setDescription] = useState(true)

      const showDescription = description ? ' active': null;
      const descriptionActive = description ? ' ' : ' description-headers-active';

      const descriptionToggle = () => {
        if (additional === false) {
            setAdditional(true)
            setDescription(!description)
        }
        setDescription(!description)
      }

      const [additional, setAdditional] = useState(true)

      const showAdditional = additional ? ' active': null;
      const additionalActive = additional ? ' ':  ' additional-button-active';

      const additionalToggle = () => {
        if (description === false) {
            setDescription(true)
            setAdditional(!additional)
        }
      }

  return (
    <div className="product-description">
        <div className="description-buttons">
            <button onClick={descriptionToggle} className={`description-button${descriptionActive}`}>Description</button>
            <button onClick={additionalToggle} className={`additional-button${additionalActive}`}>Additional</button>
            <button className="shopping-return-button">Shopping & Returns</button>
            <button className="reviews-button">Reviews</button>
        </div>
        <div onClick={descriptionToggle} className={`description-text${showDescription}`}>
            <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. </p>
            <p>* Village did removed enjoyed explain nor ham saw calling talking.</p>
            <p>* Securing as informed declared or margaret.</p>
            <p>* Joy horrible moreover man feelings own shy.</p>
            <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
        </div>
        <div onClick={additionalToggle} className={`additional-text${showAdditional}`}>
            <p>additional text</p>
        </div>
        <ProductGrid title="Related Products" products={relatedProducts}/>
    </div>
  )
}

export default ProductDescription