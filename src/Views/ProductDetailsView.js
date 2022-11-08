import React, { useState, useEffect } from 'react'
import HeaderWhite from '../Sections/HeaderWhite'
import BreadCrumb from '../Sections/BreadCrumb'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'


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
          <div className="product-view">
            <div className="product-images">
              <div id="image1" className="images"></div>
              <div id="image2" className="images"></div>
              <div id="image3" className="images"></div>
              <div id="image4" className="images"></div>
            </div>
            <div className="product-detail">
              <div className="product-details">
              <h1 className="product-name">{product.name}</h1>
              <p className="sku">SKU: 12345670</p>
              <p className="brand">BRAND: The Northland</p>
              <p className="product-rating">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
              </p>
              <p className="product-price"></p>
              <p className="product-text">Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<NavLink className="product-readmore">read more</NavLink>)</p>
              </div>
              <form className="add-to-cart-form">
                <div className="choose-size">
                  <input type="radio" name="product-size" id="small"></input>
                  <label className="product-size" for="small">S</label>
                  <input type="radio" name="product-size" id="medium"></input>
                  <label className="product-size" for="medium">M</label>
                  <input type="radio" name="product-size" id="large"></input>
                  <label className="product-size" for="large">L</label>
                  <input type="radio" name="product-size" id="x-large"></input>
                  <label className="product-size" for="x-large">XL</label>
                </div>
                <button type="button" className="color-select">Choose a color <i class="fa-light fa-chevron-down"></i></button>
                <div className="quantity-submit">
                  <div className="quantity-button">
                    <button className="decrease" type="button"><i class="fa-solid fa-minus"></i></button>
                    <p className="quantity-number">1</p>
                    <button className="increase" type="button"><i class="fa-solid fa-plus"></i></button>
                  </div>
                  <div>
                    <button className="add-to-cart-button" type="submit">ADD TO CART</button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailsView