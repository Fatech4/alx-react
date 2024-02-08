import React, { Fragment } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <Fragment>
      <p>
        <i>
          <span>Copyright </span>
          {getFullYear()} - {getFooterCopy()}{' '}
        </i>
      </p>
    </Fragment>
  );
}

export default Footer;
