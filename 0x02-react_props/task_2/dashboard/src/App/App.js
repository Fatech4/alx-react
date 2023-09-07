import React, { Fragment } from 'react';
import './App.css';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import '../Login/Login.css';
import '../Footer/Footer.css';
import '../Header/Header.css';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />

        <div className='App-body'>
          <Login />
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </div>
      ;
    </>
  );
}

export default App;
