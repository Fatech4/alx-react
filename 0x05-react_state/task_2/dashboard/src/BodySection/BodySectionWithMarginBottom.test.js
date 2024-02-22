import { StyleSheetTestUtils } from 'aphrodite';
StyleSheetTestUtils.suppressStyleInjection();
import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection'; // Importing BodySection for mocking

jest.mock('./BodySection', () => jest.fn());
describe('BodySectionWithMarginBottom component', () => {
  it('renders BodySection component with correct props', () => {
    // Mocking BodySection component
    const mockProps = {
      title: 'test title',
      children: <p>test children node</p>,
    };

    // Render the component
    const wrapper = shallow(<BodySectionWithMarginBottom {...mockProps} />);

    const childComponents = wrapper.find(BodySection);

    // Assuming you want to check props of the first ChildComponent found
    const childProps = childComponents.at(0).props();

    expect(childProps).toEqual({ ...mockProps });
  });
});
