import React from 'react'
import ProductGrid from '../Sections/ProductGrid'
import BreadCrumb from '../Sections/BreadCrumb'
import HeaderWhite from '../Sections/HeaderWhite'

const Products = () => {
  return (
    <div>
        <HeaderWhite />
        <BreadCrumb page="/products" pageName="Products"/>
        <ProductGrid title="Products"/>
    </div>
  )
}

export default Products