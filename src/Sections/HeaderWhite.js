import React from 'react'
import MobileMenu from '../Components/MobileMenu'
import { NavLink } from 'react-router-dom'
import NavbarIcon from '../Components/NavbarIcon'
import FixxoLogo from '../Assets/fixxo-icon.svg'

const HeaderWhite = () => {
  return (
    <header className="header-white">
        <div className="container">
            <nav className="__navbar-white flex c-between">
                <MobileMenu />
                <NavLink className="fixxo-logo"><img src={FixxoLogo} alt="Fixxo-Logo"/></NavLink>

                <div className="navbar-middle-links">
                    <NavLink className="navbar-middle-link" to="/home" end>Home</NavLink>
                    <NavLink className="navbar-middle-link" to="/categories" end>Categories</NavLink>
                    <NavLink className="navbar-middle-link" to="/products" end>Products</NavLink>
                    <NavLink className="navbar-middle-link" to="/contacts" end>Contacts</NavLink>
                </div>

                <div className="navbar-icons">
                    <NavbarIcon link="/search" icon="fa-regular fa-magnifying-glass"/>
                    <NavbarIcon link="/compare" icon="fa-regular fa-code-compare"/>
                    <NavbarIcon className="notification" quantity="3" link="/favourites" icon="fa-regular fa-heart"/>
                    <NavbarIcon className="notification" quantity="5" link="/shoppingcart" icon="fa-regular fa-bag-shopping"/>
                </div>
            </nav>
        </div>
  </header>
  )
}

export default HeaderWhite