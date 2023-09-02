import React, { Fragment } from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  return (
    <Fragment>
      <p>
        <i>
          Copyright {getFullYear()} - {getFooterCopy()}{' '}
        </i>
      </p>
    </Fragment>
  );
}

export default Footer;
