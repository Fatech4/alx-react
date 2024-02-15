import React from 'react';
import logo from '../assets/holberton-logo.jpg';
function Header() {
  return (
    <div className='App-header'>
      <div className='logo'> {<img src={logo} alt='logo' />}</div>
      <div className='title'>
        <h1>School dashboard</h1>
      </div>
    </div>
  );
}

export default Header;
