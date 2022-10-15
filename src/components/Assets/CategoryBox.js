import React from 'react'

const CategoryBox = () => {
  return (
    <div class="category-box">
        <div class="category-box-content">
            <a class="button-theme-category-box" href="#">
                <span class="button-theme-left"></span>
                SHOP NOW
                <span class="button-theme-right"></span>
            </a>
            <div class="content-menu">
                <a href="#"><i class="fa-regular fa-heart"></i></a>
                <a href="#"><i class="fa-regular fa-shuffle"></i></a>
                <a href="#"><i class="fa-regular fa-bag-shopping"></i></a>
            </div>
        </div>
        <div class="category-box-text">
            <p>Category</p>
            <h1>Modern black blouse</h1>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <div class="price flex c-center">
                <p class="original-price">$35.00</p>
                <p class="new-price">$30.00</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryBox