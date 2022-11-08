import React from 'react'
import { NavLink } from 'react-router-dom'
import MobileMenu from '../Components/MobileMenu'
import FixxoLogo from '../Assets/fixxo-icon.svg'
import { useShoppingCart } from '../Contexts/ShoppingCartContext'

const Header = () => {

const { cartQuantity } = useShoppingCart()

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
                  <NavLink className="navbar-icon" end>
                    <span ></span>    
                      <i className="fa-regular fa-magnifying-glass"></i>
                  </NavLink>
                  <NavLink className="navbar-icon" end>
                    <span></span>    
                      <i className="fa-regular fa-code-compare"></i>
                  </NavLink>
                  <NavLink className="navbar-icon" end>
                    <span className="notification"></span>    
                      <i className="fa-regular fa-heart"></i>
                  </NavLink>
                  <button class="navbar-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                        <span className="notification">{cartQuantity}</span>    
                        <i className="fa-regular fa-bag-shopping"></i>
                  </button>
              </div>
          </nav>
      </div>
    </header>
  )
}

export default Header