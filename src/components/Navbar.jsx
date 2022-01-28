import React, { useState } from 'react';
import logo from '../images/logo.png'


function Navbar() {

    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false)
        }
    }   
    window.addEventListener('scroll', changeBackground)

    return (
  <nav className={nav ? 'nav active' : 'nav'}>
      <a href="pagina.com" className='logo'>
          <img src={logo} alt="" />
      </a>
      <input type="checkbox" className='menu-btn' id='menu-btn'/>
      <label className='menu-icon' for="menu-btn">
          <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><a href="pagina.com" className='active'>home</a></li>
        <li><a href="pagina.com">features</a></li>
        <li><a href="pagina.com">about</a></li>
        <li><a href="pagina.com">UI SS</a></li>
        <li><a href="pagina.com">download</a></li>
      </ul>
  </nav>
    )
}

export default Navbar;
