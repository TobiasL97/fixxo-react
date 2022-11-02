import React, { useContext } from 'react'
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
import { useState } from 'react'
import Sale from '../Sections/Sale'
import { productContext } from '../Contexts/contexts'


const HomeView = () => {

  const ProductContext = useContext(productContext)
  

  return (
    <>
      <Header />
      <ShowCase />
      <Promo />
      <ProductGrid title="Featured Products" products={ProductContext.featuredProducts}/>
      <Promo2 />
      <OurSpeciality />
      <TwoFor29 title="2 FOR USD $29" products={ProductContext.TwoFor29}/>
      <TwoFor49 title="2 FOR USD $49" products={ProductContext.TwoFor49}/>
      <Sale products={ProductContext.saleProductGrid}/>
      <CompanyService />
      <Footer />
    
    </>
    
  )
}

export default HomeView