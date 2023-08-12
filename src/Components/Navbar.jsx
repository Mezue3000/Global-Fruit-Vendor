import React from 'react'
import Logo from "../media/oranges.jpg";
import { Link } from "react-router-dom";
import '../Styles/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      
      <img className='logo' src={Logo} />
      
      <div className='right-side'>
        <Link title='home-page' className='navlink' to = "/">Home</Link>
        <Link title='menu-list' className='navlink' to = "/menu">Menu</Link>
        <Link title='about-us' className='navlink' to = "/about">About</Link>
        <Link title='contact-us' className='navlink' to = "/contact">Contact</Link>
      </div>  
    </div>
  )
}

export default Navbar