import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarIcon = ({link, icon}) => {
  return (
    <NavLink className="navbar-icon" to={link}>    
        <i className={icon}></i>
    </NavLink>
  )
}

export default NavbarIcon