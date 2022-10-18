import React from 'react'
import Header from '../Sections/Header'
import ShowCase from '../Sections/ShowCase'
import Promo from '../Sections/Promo'
import Promo2 from '../Sections/Promo2'
import OurSpeciality from '../Sections/OurSpeciality'
import TwoFor29 from '../Sections/TwoFor29'
import TwoFor49 from '../Sections/TwoFor49'
import CompanyService from '../Sections/CompanyService'
import Footer from '../Sections/Footer'
import ProductGrid from '../Sections/ProductGrid'

const HomeView = () => {
  return (
    <>
      <Header />
      <ShowCase />
      <Promo />
      <ProductGrid />
      <Promo2 />
      <OurSpeciality />
      <TwoFor29 />
      <TwoFor49 />
      <CompanyService />
      <Footer />
    </>
    
  )
}

export default HomeView