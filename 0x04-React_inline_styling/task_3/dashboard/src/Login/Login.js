import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
function Login() {
  return (
    <Fragment>
      <p className={css(styles.p)}>Login to access to the full dashboard</p>{' '}
      <form>
        {' '}
        <label htmlFor='email' className={css(styles.li)}>
          Email:&nbsp;
          <input type='email' id='email' />{' '}
        </label>{' '}
        <label htmlFor='password' className={css(styles.li)}>
          Password:&nbsp;
          <input type='password' id='password' />{' '}
        </label>{' '}
        <button type='submit' className={css(styles.button)}>
          OK{' '}
        </button>{' '}
      </form>{' '}
    </Fragment>
  );
}
const styles = StyleSheet.create({
  p: {
    marginBottom: '1rem',
  },
  li: {
    display: 'inlineBlock',
    marginRight: '0.5rem',
    '@media screen and (max-width:900px)': {
      display: 'block',
      marginBottom: '0.5rem',
    },
  },
  button: {
    border: '4px solid orange',
    borderRadius: '0.4rem',
    padding: '3px 7px 3px 7px',
  },
});
export default Login;
