import React from 'react'

const SupportOffers = ({Icon, SupportHeader, SupportText, SupportTextSpan}) => {
  return (
    <div className="Support-Offer">
        <i className={Icon}></i>
        <h1>{SupportHeader}</h1>
        <p>{SupportText}<span>{SupportTextSpan}</span></p>
    </div>
  )
}

export default SupportOffers