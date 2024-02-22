import React from 'react';

const WithLogging = (WrappedComponent) => {
  class WithLoggingComponent extends React.Component {
    componentDidMount() {
      console.log(
        `Component ${this.getDisplayName(
          WrappedComponent
        )} is mounted on componentDidMount()`
      );
    }

    componentWillUnmount() {
      console.log(
        `Component ${this.getDisplayName(
          WrappedComponent
        )} is going to unmount on componentWillUnmount()`
      );
    }

    getDisplayName(WrappedComponent) {
      return (
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
      );
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingComponent.displayName = `WithLogging(${
    WithLoggingComponent.displayName || 'Component'
  })`;

  return WithLoggingComponent;
};

export default WithLogging;
