import React, { Component } from 'react';
import Listings from '../src/components/Listings';
import { getListingsBySub } from '../src/apiClient';

class Index extends Component {
  static async getInitialProps() {
    // try {
    const initialData = {
      sub: 'reactjs',
      type: 'new',
    };
    const data = await getListingsBySub(initialData);
    console.log(data);
    return { data };
    // } catch (error) {
    console.error('>>', error);
    // }
  }
  render() {
    const { initialData } = this.props;
    return (
      <div>
        <Listings initialData={initialData} />
      </div>
    );
  }
}

export default Index;
