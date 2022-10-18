import React from 'react'
import { NavLink } from 'react-router-dom'

const OurSpecialityBox = ({headLine, headLineSpan, link}) => {
  return (
    <div class="speciality-boxes">
        <div class="speciality-boxes-text">
            <h1>{headLine}<span>{headLineSpan}</span></h1>
            <NavLink to={link}>Get started<i class="fa-regular fa-chevron-right"></i></NavLink>
        </div>
        <div class="grey-box"></div>
    </div>
  )
}

export default OurSpecialityBox