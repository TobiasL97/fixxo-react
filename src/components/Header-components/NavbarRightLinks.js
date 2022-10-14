import React from 'react'

const NavbarRightLinks = () => {
  return (
    <div className="navbar-right-links">
      <a href="#"><i className="fa-regular fa-magnifying-glass"></i></a>
      <a href="#"><i className="fa-regular fa-shuffle"></i></a>
      <a id="favourites" href="#"><i className="fa-regular fa-heart"></i>
        <span className="notification">
            1
        </span>
      </a>
      <a id="cart" href="#"><i className="fa-regular fa-bag-shopping"></i>
        <span className="notification">
            3
        </span>
      </a>
    </div>
  )
}

export default NavbarRightLinks