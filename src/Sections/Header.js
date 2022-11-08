import React from 'react'
import { NavLink } from 'react-router-dom'
import MobileMenu from '../Components/MobileMenu'
import NavbarIcon from '../Components/NavbarIcon'
import FixxoLogo from '../Assets/fixxo-icon.svg'

const Header = () => {

  return (
    <header className="header-gray">
      <div className="container">
          <nav className="__navbar flex c-between">
              <MobileMenu />
              <NavLink className="fixxo-logo"><img src={FixxoLogo} alt="Fixxo-Logo"/></NavLink>

              <div className="navbar-middle-links">
                  <NavLink className="navbar-middle-link" to="/home" end>Home</NavLink>
                  <NavLink className="navbar-middle-link" to="/categories" end>Categories</NavLink>
                  <NavLink className="navbar-middle-link" to="/products" end>Products</NavLink>
                  <NavLink className="navbar-middle-link" to="/contacts" end>Contacts</NavLink>
              </div>

              <div className="navbar-icons">
                  <NavbarIcon className="navbar-button" link="/search" icon="fa-regular fa-magnifying-glass"/>
                  <NavbarIcon className="navbar-button" link="/compare" icon="fa-regular fa-code-compare"/>
                  <NavbarIcon className="navbar-button" classNameSpan="notification" quantity="3" link="/favourites" icon="fa-regular fa-heart"/>
                  <button class="navbar-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                    <NavbarIcon className="navbar-icon" classNameSpan="notification" quantity="3" link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
                  </button>
              </div>
          </nav>
      </div>
    </header>
  )
}

export default Header