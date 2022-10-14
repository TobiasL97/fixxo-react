import React from 'react'
import NavbarMiddleLinks from './NavbarMiddleLinks'
import NavbarRightLinks from './NavbarRightLinks'
import fixxoLogo from './Images/fixxo-icon.svg'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav class="__navbar flex c-between ">
          <MobileMenu />
          <a className="fixxo-logo" href="#"><img src={fixxoLogo} alt="fixxo-logo"/></a>
          <NavbarMiddleLinks />
          <NavbarRightLinks />
          
        </nav>
      </div>
    </header>
  )
}

export default Header