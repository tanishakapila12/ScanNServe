import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
const Navbar = () => {
  /* state variables */
  const [menu, setmenu] = useState("home")

  return (
    <div className='Navbar'>
    <img src={assets.logo} alt="logo" className='logo' />
    <ul className="Navbar-menu">
      <li onClick={()=> setmenu("home")} className={menu==="home" ? "active" : " " }> home</li>
      <li onClick={()=> setmenu("menu")} className={menu==="menu" ? "active" : " "}> menu</li>
      <li onClick={()=> setmenu("mobile-app")} className={menu==="mobile-app" ? "active " : " "}> mobile-app</li>
      <li onClick={()=> setmenu("contact-us")} className={menu==="contact-us" ? "active" : " " }> contact us</li>
    </ul>
    <div className="Navbar-right">
      <img src={assets.search_icon} alt="" />
      <div className="Navbar-search-icon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
      </div>
      <button> sign in </button>
    </div>
    </div>
  )
}

export default Navbar