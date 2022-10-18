import React from 'react'
import CategoryBox from '../Components/CategoryBox'

const ProductGrid = () => {
  return (
    <section className="product-grid">
        <h1>Featured Products</h1>
        <div className="container-small grid">
            <CategoryBox  Title="Category" Header="Modern black blouse"/>
            <CategoryBox  Title="Category" Header="Modern black blouse"/>
            <CategoryBox  Title="Category" Header="Modern black blouse"/>
            <CategoryBox  Title="Category" Header="Modern black blouse"/>
            <CategoryBox  Title="Category" Header="Modern black blouse"/>
            <CategoryBox  Title="Category" Header="Modern black blouse"/>
            <CategoryBox  Title="Category" Header="Modern black blouse"/>
            <CategoryBox  Title="Category" Header="Modern black blouse"/>
        </div>
    </section>
  )
}

export default ProductGrid