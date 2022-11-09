import React, { useState, useEffect } from 'react'
import HeaderWhite from '../Sections/HeaderWhite'
import BreadCrumb from '../Sections/BreadCrumb'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ProductDetail from '../Components/ProductDetail'


const ProductDetailsView = () => {

  const {id} = useParams()
  const [product, setProducts] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
      setProducts(await result.json())
    }
    fetchData()

  }, [])

  return (
    <>
      <HeaderWhite />
      <div className="product-detail-container">
        <div className="container-small">
          <p>Get 25% OFF at the Fixxo Selection - <NavLink to="/products" className="shop-now">Shop now!</NavLink></p>
          <BreadCrumb page="/ProductDetailsView" pageName="Product Detail"/>
          <ProductDetail products={product}/>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsView