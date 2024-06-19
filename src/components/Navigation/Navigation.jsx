import React from 'react';
// import React, { useState } from 'react';
import './Navigation.css'; 

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li className='contact'>Contact</li>
      </ul>
      <ul className="search">
      <li className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>Search</button>
        </li>
      </ul>

      

    </nav>
  )
}

export default Navigation;
