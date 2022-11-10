import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonTheme = ({text, link}) => {
  return (
    <NavLink className="button-theme" to={link}>
        <span className="button-theme-left"></span>
        {text}
        <span className="button-theme-right"></span>
    </NavLink>
  )
}

export default ButtonTheme