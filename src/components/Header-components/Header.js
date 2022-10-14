import React from 'react'
import MobileMenu from './MobileMenu'
import NavbarMiddleLinks from './NavbarMiddleLinks'
import NavbarRightLinks from './NavbarRightLinks'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav class="__navbar flex c-between ">
          <MobileMenu />
          <NavbarMiddleLinks />
          <NavbarRightLinks />
          
        </nav>
      </div>
    </header>
  )
}

export default Header