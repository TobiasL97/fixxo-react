import React from 'react'

const CategoryBoxFlexed = () => {
  return (
    <div class="category-box-flexed flex">
        <div class="category-box-flexed-content">
            <a class="button-theme-category-box-flexed" href="#">
                <span class="button-theme-left"></span>
                SHOP NOW
                <span class="button-theme-right"></span>
            </a>
            <div class="category-box-flexed-content-menu">
                <a href="#"><i class="fa-regular fa-heart"></i></a>
                <a href="#"><i class="fa-regular fa-shuffle"></i></a>
                <a href="#"><i class="fa-regular fa-bag-shopping"></i></a>
            </div>
        </div>
        <div class="category-box-flexed-text">
            <p>Category</p>
            <h1>Modern black blouse</h1>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <i class="fa-sharp fa-solid fa-star"></i>
            <div class="price flex">
                <p class="new-price">$30.00</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryBoxFlexed