import React, { Component } from 'react';

class Listings extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>{JSON.stringify(this.props.initialData)}</p>
      </div>
    );
  }
}

export default Listings;
