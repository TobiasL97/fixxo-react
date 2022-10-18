import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadCrumb = () => {
  return (
    <section class="__breadcrumb">
        <div class="container-small">
            <ul class="breadcrumb-list">
                <li><NavLink className="breadcrumb-text" to="/home">Home</NavLink></li>
                <li>Contacts</li>
            </ul>
        </div>
    </section>
  )
}

export default BreadCrumb