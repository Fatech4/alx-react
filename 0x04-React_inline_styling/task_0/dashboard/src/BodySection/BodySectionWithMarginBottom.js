import React, { Component } from 'react';
import BodySection from './BodySection';
import './BodySection.css';

export default class BodySectionWithMarginsBottom extends Component {
  render() {
    return (
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props} />
      </div>
    );
  }
}
