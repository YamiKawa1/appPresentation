import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>Launch Your App</span> with confidence And creativity</h1>
            <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nulla minima molestiae</p>
            <a href="#" className='cv-btn'>Download</a>
        </div>
    </div>
  ) 
}

export default Header;
