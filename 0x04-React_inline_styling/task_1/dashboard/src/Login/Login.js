import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
function Login() {
  return (
    <Fragment>
      <p className={css(styles.p)}>Login to access to the full dashboard</p>{' '}
      <form>
        {' '}
        <label htmlFor='email'>
          Email: &nbsp; <input type='email' id='email' />{' '}
        </label>{' '}
        <label htmlFor='password'>
          &nbsp;Password: &nbsp; <input type='password' id='password' />{' '}
        </label>{' '}
        &nbsp;&nbsp; <input type='submit' value='OK' />{' '}
      </form>{' '}
    </Fragment>
  );
}
const styles = StyleSheet.create({
  p: {
    marginBottom: '1rem',
  },
});
export default Login;
