import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonTheme = ({text}) => {
  return (
    <NavLink className="button-theme" to="/categories">
        <span className="button-theme-left"></span>
        {text}
        <span className="button-theme-right"></span>
    </NavLink>
  )
}

export default ButtonTheme