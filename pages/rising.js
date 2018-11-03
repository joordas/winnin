import React, { Component } from 'react';
import Listing from '../src/components/Listing';

class Rising extends Component {
  static async getInitialProps({ pathname }) {
    if (pathname) {
      return { pathname };
    }
    return {};
  }
  render() {
    const { pathname } = this.props;
    return (
      <div>
        <Listing listing={pathname} />
      </div>
    );
  }
}

export default Rising;
