import React from 'react'
import RequestBox from './RequestBox'
import ReturnBox from './ReturnBox'
import Trackbox from './Trackbox'

const OurSpeciality = () => {
  return (
    <section className="our-speciality container">
        <h1>Our Speciality</h1>
        <div className="our-speciality-grid grid">
            <Trackbox />
            <ReturnBox />
            <RequestBox />
        </div>
    </section>
  )
}

export default OurSpeciality