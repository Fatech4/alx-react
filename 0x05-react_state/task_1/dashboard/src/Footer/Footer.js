import React, { Fragment } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
function Footer() {
  return (
    <Fragment>
      <p className={css(styles.p)}>
        <i>
          <span>Copyright </span>
          {getFullYear()} - {getFooterCopy()}{' '}
        </i>
      </p>
    </Fragment>
  );
}
const styles = StyleSheet.create({
  p: {
    width: '100%',
  },
});
export default Footer;
