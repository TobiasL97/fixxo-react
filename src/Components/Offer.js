import React from 'react'
import ButtonThemeLight from './ButtonThemeLight'

const Offer = ({OfferText}) => {
  return (
    <div className="offer">
        <div className="offer-content">
            <h1>{OfferText}</h1>
            <ButtonThemeLight text="FLASH SALE" />
        </div>
    </div>
  )
}

export default Offer