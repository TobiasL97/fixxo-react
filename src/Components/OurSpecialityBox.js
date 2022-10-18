import React from 'react'
import { NavLink } from 'react-router-dom'

const OurSpecialityBox = ({headLine, headLineSpan, link}) => {
  return (
    <div className="speciality-boxes">
        <div className="speciality-boxes-text">
            <h1>{headLine}<span>{headLineSpan}</span></h1>
            <NavLink to={link}>Get started<i className="fa-regular fa-chevron-right"></i></NavLink>
        </div>
        <div className="grey-box"></div>
    </div>
  )
}

export default OurSpecialityBox