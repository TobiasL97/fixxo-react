import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonThemeLight = ({text}) => {
  return (
    <NavLink className="button-theme-light" to="/categories">
        <span className="button-theme-left"></span>
        {text}
        <span className="button-theme-right"></span>
    </NavLink>
  )
}

export default ButtonThemeLight