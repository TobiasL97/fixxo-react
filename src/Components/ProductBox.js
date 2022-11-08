import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../Contexts/ShoppingCartContext'
import { currencyFormatter } from '../Utilities/CurrencyFormatter'


const ProductBox = ({product}) => {

    const { incrementQuantity } = useShoppingCart()

  return (
    <div className="product-box">
        <div className="product-box-content">
            <img className="product-image" src={product.imageName} alt={product.name} />
            <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="button-theme-product-box">
                <span className="button-theme-left"></span>
                QUICK VIEW
                <span className="button-theme-right"></span>
            </NavLink>
            <div className="content-menu">
                <button  className="menu-icon"><i className="fa-regular fa-heart"></i></button>
                <button  className="menu-icon"><i className="fa-regular fa-code-compare"></i></button>
                <button onClick={() => incrementQuantity({articleNumber: product.articleNumber, product: product})} className="menu-icon"><i className="fa-regular fa-bag-shopping"></i></button>
            </div>
        </div>
        <div className="product-box-text">
            <p className="product-box-category">{product.category}</p>
            <h1 className="product-box-title">{product.name}</h1>
            <p className="product-box-rating">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </p>
            <div className="price flex c-center">
                <p className="original-price">{product.orgPrice}</p>
                <p className="new-price">{currencyFormatter(product.price)}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductBox