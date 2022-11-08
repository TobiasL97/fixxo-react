import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../Contexts/shoppingCartContext'

const NavbarIcon = ({link, icon, classNameSpan, className}) => {

  const { cartQuantity } = useShoppingCart()

  return (
    <NavLink className={className} to={link} end>
        <span className={classNameSpan}>{cartQuantity}</span>    
        <i className={icon}></i>
    </NavLink>
  )
}

export default NavbarIcon