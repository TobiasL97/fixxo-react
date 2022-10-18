import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryBox = ({Title, Header}) => {
  return (
    <div className="category-box">
        <div className="category-box-content">
            <NavLink to="/products" className="button-theme-category-box">
                <span className="button-theme-left"></span>
                QUICKVIEW
                <span className="button-theme-right"></span>
            </NavLink>
            <div className="content-menu">
                <button className="menu-icon"><i className="fa-regular fa-heart"></i></button>
                <button className="menu-icon"><i className="fa-regular fa-shuffle"></i></button>
                <button className="menu-icon"><i className="fa-regular fa-bag-shopping"></i></button>
            </div>
        </div>
        <div className="category-box-text">
            <p>{Title}</p>
            <h1>{Header}</h1>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <i className="fa-sharp fa-solid fa-star"></i>
            <div className="price flex c-center">
                <p className="original-price">$35.00</p>
                <p className="new-price">$30.00</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryBox