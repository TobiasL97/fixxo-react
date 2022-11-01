import React, { useContext } from 'react'
import ProductGrid from '../Sections/ProductGrid'
import BreadCrumb from '../Sections/BreadCrumb'
import HeaderWhite from '../Sections/HeaderWhite'
import { productContext } from '../Contexts/contexts'


const Products = () => {

  const ProductContext = useContext(productContext)

  return (
    <div>
        <HeaderWhite />
        <BreadCrumb page="/products" pageName="Products"/>
        <ProductGrid title="Products" products={ProductContext.allProducts}/>
    </div>
  )
}

export default Products