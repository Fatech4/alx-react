import { StyleSheetTestUtils } from 'aphrodite';

// Call suppressStyleInjection before any other imports in your test file
StyleSheetTestUtils.suppressStyleInjection();
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('renders without crashing', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toBeTruthy();
});

it('verify that the least component output Copyright', () => {
  const wrapper = shallow(<Footer />);
  const text = wrapper.find('p').text();
  expect(text).toContain('Copyright');
});
