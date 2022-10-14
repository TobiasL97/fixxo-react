import React from 'react'

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <a href="#" onclick="mobilemenu()" className="hamburger-icon">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </a>

      <nav className="hamburger-menu">
          <a href="#">Home</a>
          <a href="#">Categories</a>
          <a href="#">Products</a>
          <a href="#">Contacts</a>
      </nav>
    </div>
  )
}

export default MobileMenu