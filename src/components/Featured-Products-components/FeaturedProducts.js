import React from 'react'
import CategoryBox from '../Assets/CategoryBox'

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
        <h1>Featured Products</h1>
        <div className="container-small grid">
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
            <CategoryBox />
        </div>
    </section>
  )
}

export default FeaturedProducts