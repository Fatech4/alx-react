// BodySectionWithMarginBottom.test.js

import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection'; // Importing BodySection for mocking

jest.mock('./BodySection', () => jest.fn());
jest.mock('./BodySection.css', () => 'BodySection.css');
describe('BodySectionWithMarginBottom component', () => {
  it('renders BodySection component with correct props', () => {
    // Mocking BodySection component
    const mockProps = {
      title: 'test title',
      children: <p>test children node</p>,
    };

    // Render the component
    shallow(<BodySectionWithMarginBottom {...mockProps} />);

    // Check if BodySection component is rendered
    expect(BodySection).toHaveBeenCalled(1);

    // Retrieve the instance of BodySection from the mock calls
    const bodySectionInstance = BodySection.mock.instances[0];

    // Check if BodySection was called with the correct props
    expect(bodySectionInstance.props).toEqual(mockProps);
  });
});
