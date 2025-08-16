import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'> 
       <div className="header-contents">
            <h1>Food Delivery</h1>  
            <h2>Order your favorite food online</h2>
            <p> choose rom a diverse menu featuring a delectable arrat of dishes crafted from the famous michellean star chef Tanisha Kapila</p>
            <button> View Menu
            </button>
       </div>
       <div className="header-image">
            <img src="https://example.com/food-image.jpg" alt="Delicious food" />
       </div>
    </div>
  )
}

export default Header