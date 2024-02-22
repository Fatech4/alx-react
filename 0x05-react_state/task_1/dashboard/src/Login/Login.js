import React, { Fragment, useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    handleSubmitButton();
  };
  const handleChangeEmail = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEnableSubmit(newEmail !== '' && password !== '');
  };
  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(e.target.value);
    setEnableSubmit(email !== '' && newPassword !== '');
  };
  // const handleSubmitButton = () => {
  //   if (email != '' && password != '') {
  //     setEnableSubmit(true);
  //   } else {
  //     setEnableSubmit(false);
  //   }
  // };
  return (
    <Fragment>
      <p className={css(styles.p)}>Login to access to the full dashboard</p>{' '}
      <form onSubmit={handleLoginSubmit}>
        {' '}
        <label htmlFor='email' className={css(styles.li)}>
          Email:&nbsp;
          <input type='email' id='email' onChange={handleChangeEmail} />{' '}
        </label>{' '}
        <label htmlFor='password' className={css(styles.li)}>
          Password:&nbsp;
          <input
            type='password'
            id='password'
            onChange={handleChangePassword}
          />{' '}
        </label>{' '}
        <input
          type='submit'
          className={css(styles.button)}
          value='OK'
          disabled={!enableSubmit}
        />
        s
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
