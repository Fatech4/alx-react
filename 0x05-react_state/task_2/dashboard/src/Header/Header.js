import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
class Header extends React.Component {
  static contextType = AppContext;
  render() {
    // const { user, logOut } = this.context;
    let { user, logOut } = this.context;

    return (
      <div className={`${css(styles.appHeader)}`}>
        {user.isLoggedIn && (
          <section id='logoutSection'>
            {`Welcome ${user.email}`}{' '}
            <a href='#' onClick={() => logOut()} className={css(styles.a)}>
              (Logout)
            </a>
          </section>
        )}
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
}
// Header.contextType = AppContext;
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
  a: {
    textDecoration: 'none',
  },
});
export default Header;
