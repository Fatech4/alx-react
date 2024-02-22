// BodySection.test.js
import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();
import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
  it('renders title and children correctly', () => {
    const wrapper = shallow(
      <BodySection title='test title'>
        <p>test children node</p>
      </BodySection>
    );

    // Check if one h2 element with correct text is rendered
    expect(wrapper.find('h2').text()).toEqual('test title');

    // Check if one p element with correct text is rendered
    expect(wrapper.find('p').text()).toEqual('test children node');
  });
});
