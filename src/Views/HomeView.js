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
import { useState } from 'react'
import Sale from '../Sections/Sale'

const HomeView = () => {

  const [TwoFor29Products, setTwoFor29Products] = useState([
    { id : 1, name: "Mordern Black Blouse", category: "Fashion", orgPrice: "$35.00", newPrice: "$25.00"},
    { id : 2, name: "Mordern Black Blouse", category: "Fashion", orgPrice: "$35.00", newPrice: "$25.00"},
    { id : 3, name: "Mordern Black Blouse", category: "Fashion", orgPrice: "$35.00", newPrice: "$25.00"},
    { id : 4, name: "Mordern Black Blouse", category: "Fashion", orgPrice: "$35.00", newPrice: "$25.00"},

  ])

  const [TwoFor49Products, setTwoFor49Products] = useState([
    { id : 1, name: "Mordern Black Blouse", category: "Fashion", orgPrice: "$35.00", newPrice: "$25.00"},
    { id : 2, name: "Mordern Black Blouse", category: "Fashion", orgPrice: "$35.00", newPrice: "$25.00"},
    { id : 3, name: "Mordern Black Blouse", category: "Fashion", orgPrice: "$35.00", newPrice: "$25.00"},
    { id : 4, name: "Mordern Black Blouse", category: "Fashion", orgPrice: "$35.00", newPrice: "$25.00"},

  ])

  const [saleProducts, setSaleProducts] = useState([
    {id: 1, category: "fashion", name: "Modern Blue Blouse", price: "$35.00"},
    {id: 2, category: "fashion", name: "Modern Blue Blouse", price: "$35.00"},
    {id: 3, category: "fashion", name: "Modern Blue Blouse", price: "$35.00"},
    {id: 3, category: "fashion", name: "Modern Blue Blouse", price: "$35.00"}
  ])
  

  return (
    <>
      <Header />
      <ShowCase />
      <Promo />
      <ProductGrid title="Featured Products"/>
      <Promo2 />
      <OurSpeciality />
      <TwoFor29 TwoFor29Products={TwoFor29Products}/>
      <TwoFor49 TwoFor49Products={TwoFor49Products}/>
      <Sale saleProducts={saleProducts}/>
      <CompanyService />
      <Footer />
    
    </>
    
  )
}

export default HomeView