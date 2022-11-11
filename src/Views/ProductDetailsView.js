import React, { useState, useEffect } from 'react'
import HeaderWhite from '../Sections/HeaderWhite'
import BreadCrumb from '../Sections/BreadCrumb'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ProductDetail from '../Components/ProductDetail'
import { useProductContext } from '../Contexts/ProductContext'
import ProductDescription from '../Components/ProductDescription'
import Footer from '../Sections/Footer'
import ProductGrid from '../Sections/ProductGrid'


const ProductDetailsView = () => {

  const {id} = useParams()
  const {product, getProduct, relatedProducts, getRelatedProducts} = useProductContext()

  useEffect(() => {
    getProduct(id)
    getRelatedProducts(4)
  }, [])

  return (
    <>
      <HeaderWhite />
      <div className="product-detail-container">
        <div className="container-small">
          <p>Get 25% OFF at the Fixxo Selection - <NavLink to="/products" className="shop-now">Shop now!</NavLink></p>
          <BreadCrumb page="/ProductDetailsView" pageName="Product Detail"/>
          <ProductDetail products={product}/>
          <ProductDescription />
          <ProductGrid title="Related Products" products={relatedProducts}/>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default ProductDetailsView