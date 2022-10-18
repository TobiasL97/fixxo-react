import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonThemeDark = ({text}) => {
  return (
    <NavLink className="button-theme-dark" to="/categories">
        <span className="button-theme-left"></span>
        {text}
        <span className="button-theme-right"></span>
    </NavLink>
  )
}

export default ButtonThemeDark