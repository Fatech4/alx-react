import logo from './logo.jpg';
import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <div className='logo'>
          {' '}
          <img src={logo} alt='logo' />
        </div>
        <div className='title'>
          <h1>School dashboard</h1>
        </div>
      </div>
      <div className='App-body'>
        <p>Login to access to the full dashboard</p>
        <form>
          <label htmlFor='email'>
            Email: &nbsp;
            <input type='email' id='email' />
          </label>
          <label htmlFor='password'>
            &nbsp;Password: &nbsp;
            <input type='password' id='password' />
          </label>{' '}
          &nbsp;&nbsp;
          <input type='submit' value='OK' />
        </form>
      </div>
      <div className='App-footer'>
        <p>
          <i>
            Copyright {getFullYear()} - {getFooterCopy()}
          </i>
        </p>
      </div>
    </div>
  );
}

export default App;
