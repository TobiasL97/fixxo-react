import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductBoxFlexed = ({saleProduct}) => {
  return (
    <div className="product-box-flexed flex">
        <div className="product-box-flexed-content">
            <NavLink className="button-theme-product-box-flexed" to="/products">
                <span className="button-theme-left"></span>
                SHOP NOW
                <span className="button-theme-right"></span>
            </NavLink>
            <div className="product-box-flexed-content-menu">
                <button className="menu-icon"><i className="fa-regular fa-heart"></i></button>
                <button className="menu-icon"><i className="fa-regular fa-shuffle"></i></button>
                <button className="menu-icon"><i className="fa-regular fa-bag-shopping"></i></button>
            </div>
        </div>
        <div className="product-box-flexed-text">
            <p className="product-box-flexed-category">{saleProduct.category}</p>
            <h1 className="product-box-flexed-title">{saleProduct.name}</h1>
            <p className="product-box-flexed-rating">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <div className="price flex">
                <p className="new-price">{saleProduct.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductBoxFlexed