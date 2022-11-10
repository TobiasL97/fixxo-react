import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonThemeDark = ({text, link}) => {

  const toTop = () => {
    window.scrollTo({top:0, behavior: 'instant'})
  }

  return (
    <NavLink  className="button-theme-dark" to={link} onClick={toTop}>
        <span className="button-theme-left"></span>
        {text}
        <span className="button-theme-right"></span>
    </NavLink>
  )
}

export default ButtonThemeDark