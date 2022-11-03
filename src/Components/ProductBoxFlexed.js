import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductBoxFlexed = ({product}) => {
  return (
    <div className="product-box-flexed flex">
        <div className="product-box-flexed-content">
        <img className="product-image" src={product.imageName} alt={product.name} />
            <NavLink className="button-theme-product-box-flexed" to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`}>
                <span className="button-theme-left"></span>
                SHOP NOW
                <span className="button-theme-right"></span>
            </NavLink>
            <div className="product-box-flexed-content-menu">
                <button className="menu-icon"><i className="fa-regular fa-heart"></i></button>
                <button className="menu-icon"><i className="fa-regular fa-code-compare"></i></button>
                <button className="menu-icon"><i className="fa-regular fa-bag-shopping"></i></button>
            </div>
        </div>
        <div className="product-box-flexed-text">
            <p className="product-box-flexed-category">{product.category}</p>
            <h1 className="product-box-flexed-title">{product.name}</h1>
            <p className="product-box-flexed-rating">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <div className="price flex">
                <p className="new-price">{product.price}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductBoxFlexed