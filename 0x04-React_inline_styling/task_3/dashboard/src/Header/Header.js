import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
function Header() {
  return (
    <div className={`${css(styles.appHeader)}`}>
      <div className='logo'>
        {' '}
        {<img src={logo} alt='logo' className={css(styles.img)} />}
      </div>
      <div className={css(styles.title)}>
        <h1>School dashboard</h1>
      </div>
    </div>
  );
}
const styles = StyleSheet.create({
  appHeader: {
    display: 'flex',
    borderBottom: '3px solid rgb(231, 46, 46)',
  },
  img: {
    width: '200px',
    height: '200px',
  },
  title: {
    verticalAlign: 'middle',
    lineHeight: '150px',
    color: 'rgb(231, 46, 46)',
    fontWeight: 'bold',
    '@media screen and (max-width:900px)': {
      lineHeight: 'initial',
    },
  },
});
export default Header;
