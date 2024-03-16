import { StyleSheetTestUtils } from 'aphrodite';

// Call suppressStyleInjection before any other imports in your test file
StyleSheetTestUtils.suppressStyleInjection();
import React from 'react';
import { mount, shallow } from 'enzyme';
import WithLogging from './WithLogging';

describe('WithLogging', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs mount and unmount events for pure HTML', () => {
    const WrappedComponent = WithLogging(function () {
      return <p>Hello</p>;
    });
    const wrapper = shallow(<WrappedComponent />);
    wrapper.unmount();

    expect(consoleSpy).toHaveBeenCalledWith(
      'Component Component is mounted on componentDidMount()'
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Component Component is going to unmount on componentWillUnmount()'
    );
  });

  it('logs mount and unmount events for named component', () => {
    function Login() {
      return <div>Login component</div>;
    }
    const WrappedLogin = WithLogging(Login);
    const wrapper = shallow(<WrappedLogin />);
    wrapper.unmount();

    expect(consoleSpy).toHaveBeenCalledWith(
      'Component Login is mounted on componentDidMount()'
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      'Component Login is going to unmount on componentWillUnmount()'
    );
  });
});
