import React from 'react'
import { NavLink } from 'react-router-dom'
import MobileMenu from '../Components/MobileMenu'
import NavbarIcon from '../Components/NavbarIcon'
import FixxoLogo from '../Assets/fixxo-icon.svg'

const Header = () => {

  return (
    <header>
      <div className="container">
          <nav className="__navbar flex c-between">
              <MobileMenu />
              <NavLink className="fixxo-logo"><img src={FixxoLogo} alt="Fixxo-Logo"/></NavLink>

              <div className="navbar-middle-links">
                  <NavLink to="/home">Home</NavLink>
                  <NavLink to="/categories">Categories</NavLink>
                  <NavLink to="/products">Products</NavLink>
                  <NavLink to="/contacts">Contacts</NavLink>
              </div>

              <div className="navbar-icons">
                  <NavbarIcon link="/search" icon="fa-regular fa-magnifying-glass"/>
                  <NavbarIcon link="/compare" icon="fa-regular fa-code-compare"/>
                  <NavbarIcon link="/favourites" icon="fa-regular fa-heart"/>
                  <NavbarIcon link="/shoppingcart" icon="fa-regular fa-bag-shopping"/>
              </div>
          </nav>
      </div>
    </header>
  )
}

export default Header