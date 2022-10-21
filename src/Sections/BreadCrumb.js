import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadCrumb = () => {
  return (
    <section className="__breadcrumb">
        <div className="container-small">
            <ul className="breadcrumb-list">
                <li><NavLink className="breadcrumb-text" to="/home">Home</NavLink></li>
                <li><NavLink className="breadcrumb-text" to="/contacts">Contacts</NavLink></li>
            </ul>
        </div>
    </section>
  )
}

export default BreadCrumb