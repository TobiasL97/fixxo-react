import React, { useContext, useEffect } from 'react'
import ProductGrid from '../Sections/ProductGrid'
import BreadCrumb from '../Sections/BreadCrumb'
import HeaderWhite from '../Sections/HeaderWhite'
import { useProductContext } from '../Contexts/ProductContext'


const Products = () => {

  let currentPage = "Products"
  window.top.document.title = `${currentPage} || Fixxo` 

  const { products, getProducts } = useProductContext()

  useEffect(() => {
    getProducts(0)
  }, [])

  return (
    <div>
        <HeaderWhite />
        <BreadCrumb page="/products" pageName="Products"/>
        <ProductGrid title="Products" products={products}/>
    </div>
  )
}

export default Products