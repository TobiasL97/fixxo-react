import React from 'react'
import OurSpecialityBox from '../Components/OurSpecialityBox'

const OurSpeciality = () => {
  return (
    <section className="our-speciality container">
        <h1>Our Speciality</h1>
        <div className="our-speciality-grid grid">
            <OurSpecialityBox to="/trackyourorder" headLine="Track Your Order" />
            <OurSpecialityBox to="/makeareturn" headLine="Make a Return" />
            <OurSpecialityBox to="/requestaprice" headLine="Request a Price" headLineSpan="Adjustment"/>
        </div>
    </section>
  )
}

export default OurSpeciality