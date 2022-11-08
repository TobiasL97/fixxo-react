import React from 'react'
import { useShoppingCart } from '../Contexts/ShoppingCartContext'
import { currencyFormatter } from '../Utilities/CurrencyFormatter'

const ShoppingCartItem = ({item}) => {

  const { incrementQuantity, decrementQuantity, removeItem } = useShoppingCart()

  return (
    <div className="shoppingcart-item">
      <div className="item-image">
        <img src={item.product.imageName} alt={item.product.name}/>
      </div>
      <div className="item-info">
        <div className="item-info-name">{item.product.name}</div>
        <div className="quantity-button">
          <button className="decrease" onClick={() => decrementQuantity(item)} type="button">-</button>
          <span className="quantity-number">{item.quantity}</span>
          <button className="increase" onClick={() => incrementQuantity(item)} type="button">+</button>
        </div>
      </div>
      <div className="item-price">
        <div className="product-price">{currencyFormatter(item.product.price * item.quantity)}</div>
        <button className="remove-product" onClick={() => removeItem(item.articleNumber)}><i class="fa-solid fa-trash-can"></i></button>
      </div>
    </div>
  )
}

export default ShoppingCartItem