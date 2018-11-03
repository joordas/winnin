import React, { Component } from 'react';
import Listing from '../src/components/Listing';

class Index extends Component {
  render() {
    return (
      <div>
        <Listing listing={'/hot'} />
      </div>
    );
  }
}

export default Index;
