import React from 'react'
import Footer from '../Sections/Footer'
import Header from '../Sections/Header'
import { useParams } from 'react-router-dom'

const ProductDetailsView = () => {
    const params = useParams()

  return (
    <>
        <Header />
        <div className="container">
            <h1>{params.name}</h1>
        </div>
        <Footer />
    </>
  )
}

export default ProductDetailsView