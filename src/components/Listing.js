import React, { Component } from 'react';
import pathOr from 'ramda/src/pathOr';
import { getListingsBySub, paginate } from '../apiClient';
import ListingItem from './ListingItem';
import Pagination from './Pagination';

class Listings extends Component {
  state = {
    sub: 'reactjs',
    data: [],
    after: null,
    nextPage: 2,
    loadingContent: true,
  };

  async getInitialData() {
    const type = this.props.listing || '/hot';
    const { sub } = this.state;
    try {
      const initialData = {
        type,
        sub,
      };

      const data = await getListingsBySub(initialData);
      return { data };
    } catch (error) {
      console.error('>>', error);
    }
  }

  async changePage() {
    this.setState({ loadingContent: true });
    const type = this.props.listing || '/hot';
    const { sub, data: items, nextPage: page } = this.state;
    const { data: currentData, after } = this.state;
    const count = items.length;
    const res = await paginate({ sub, type, after, count });
    const data = [
      ...currentData,
      ...pathOr([], ['data', 'children'], res),
    ];
    console.log('data >>>>>>>>>>>', data);
    this.setState(prevState => ({
      data,
      page: prevState.page + 1,
      after: pathOr('', ['data', 'after'], res),
    }));
  }

  async componentDidMount() {
    const res = await this.getInitialData();
    const data = pathOr([], ['data', 'data', 'children'], res);
    const after = pathOr(null, ['data', 'data', 'after'], res);
    this.setState({ data, after, loadingContent: false });
  }

  render() {
    const { data } = this.state;
    if (this.state.loadingContent) return <h1>loading</h1>;
    return (
      <>
        {data.map(post => (
          <ListingItem key={post.id} post={post.data} />
        ))}
        <Pagination paginate={this.changePage.bind(this)} />
      </>
    );
  }
}

export default Listings;
