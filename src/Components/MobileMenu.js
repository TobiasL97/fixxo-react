import React from 'react'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
  return (
    <div className="Mobile-Menu">
        <NavLink to="#" onclick="mobileMenu()" className="hamburger-icon">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </NavLink>

        <nav className="hamburger-menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </nav>
    </div>
  )
}

export default MobileMenu