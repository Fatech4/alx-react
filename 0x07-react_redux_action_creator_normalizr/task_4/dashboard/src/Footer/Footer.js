import React, { Fragment, useContext } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
function Footer() {
  const context = useContext(AppContext);
  const { user, logOut } = context;

  return (
    <Fragment>
      <p className={css(styles.p)}>
        <i>
          <span>Copyright </span>
          {getFullYear()} - {getFooterCopy()}{' '}
        </i>
      </p>
      {user.isLoggedIn && (
        <p>
          <a href=''>Contact us</a>
        </p>
      )}
    </Fragment>
  );
}
const styles = StyleSheet.create({
  p: {
    width: '100%',
  },
});
export default Footer;
