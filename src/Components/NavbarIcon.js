import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarIcon = ({link, icon, quantity, className}) => {
  return (
    <NavLink className="navbar-icon" to={link} end>
        <span className={className}>{quantity}</span>    
        <i className={icon}></i>
    </NavLink>
  )
}

export default NavbarIcon