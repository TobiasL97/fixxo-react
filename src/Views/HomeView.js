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
import { FeaturedProductsContext, TwoFor29ProductsContext, TwoFor49ProductsContext, SaleProductsContext } from '../Contexts/contexts'


const HomeView = () => {

    let currentPage = "Home"
    window.top.document.title = `${currentPage} || Fixxo` 

  const featuredProducts = useContext(FeaturedProductsContext)
  const twoFor29Products = useContext(TwoFor29ProductsContext)
  const twoFor49Products = useContext(TwoFor49ProductsContext)
  const saleProducts = useContext(SaleProductsContext)
  

  return (
    <>
      <Header />
      <ShowCase />
      <Promo />
      <ProductGrid title="Featured Products" products={featuredProducts}/>
      <Promo2 />
      <OurSpeciality />
      <TwoFor29 title="2 FOR USD $29" products={twoFor29Products}/>
      <TwoFor49 title="2 FOR USD $49" products={twoFor49Products}/>
      <Sale products={saleProducts}/>
      <CompanyService />
      <Footer />
    
    </>
    
  )
}

export default HomeView