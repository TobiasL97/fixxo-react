import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonThemeLight = ({text, link}) => {

  const toTop = () => {
    window.scrollTo({top:0, behavior: 'instant'})
  }

  return (
    <NavLink onClick={toTop} className="button-theme-light" to={link}>
        <span className="button-theme-left"></span>
        {text}
        <span className="button-theme-right"></span>
    </NavLink>
  )
}

export default ButtonThemeLight