import React from 'react';


const withPageController = (WrappedComponent, param) => class extends React.Component {
  render() {
    return (
      <WrappedComponent param={param} {...this.props} />
    )
  }
}
export default withPageController;
