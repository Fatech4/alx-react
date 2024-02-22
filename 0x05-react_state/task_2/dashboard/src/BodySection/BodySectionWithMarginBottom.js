import React, { Component } from 'react';
import BodySection from './BodySection';

import { StyleSheet, css } from 'aphrodite';

export default class BodySectionWithMarginsBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px',
  },
});
