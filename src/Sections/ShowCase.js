import React from 'react'
import GirlOnChair from '../Assets/girl-on-chair.svg'
import ButtonTheme from '../Components/ButtonTheme'
import PersonInCoat from '../Assets/person-in-coat.svg'

const ShowCase = () => {
  return (
    <section className="showcase">
        <div className="container flex c-center">
            <img className="img-left" src={GirlOnChair} alt="Girl-on-chair" />
            <div className="showcase-text">
                <h1>SALE UP<span>To 50% Off</span></h1>
                <p>Online shopping free home delivery over $100</p>
                <ButtonTheme text="SHOP NOW"/>
            </div>
            <img className="img-right" src={PersonInCoat} alt="Person-in-a-coat" />
        </div>
    </section>
  )
}

export default ShowCase