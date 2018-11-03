import React, { Component } from 'react';
import pathOr from 'ramda/src/pathOr';
import last from 'ramda/src/last';
import { getListingsBySub, paginate } from '../apiClient';
import ListingItem from './ListingItem';
import Pagination from './Pagination';
import config from '../config';

class Listing extends Component {
  state = {
    data: [],
    after: null,
    loadingContent: true,
    endOfContent: false,
  };

  async componentDidMount() {
    const res = await this.getInitialData();
    const data = pathOr([], ['data', 'data', 'children'], res);
    // const after = pathOr(null, ['data', 'data', 'after'], res);
    const after = data.length ? last(data).data.name : null;

    this.setState({ data, after, loadingContent: false });
  }

  async getInitialData() {
    const { listing } = this.props;
    const type = listing || config.defaultListing;
    const { defaultSub: sub } = config;
    try {
      const initialData = {
        type,
        sub,
        params: { limit: config.initialPostsToFech },
      };

      const data = await getListingsBySub(initialData);
      return { data };
    } catch (error) {
      console.error('>>', error);
    }
  }

  async changePage() {
    this.setState({ loadingContent: true });
    const { listing } = this.props;
    const type = listing || '/hot';
    const { defaultSub: sub } = config;
    const { data: items } = this.state;
    const { data: currentData, after } = this.state;
    const count = items.length;
    const res = await paginate({
      sub,
      type,
      after,
      count,
    });
    if (pathOr([], ['data', 'children'], res).length === 0) {
      return this.setState({
        loadingContent: false,
        endOfContent: true,
      });
    }
    const data = [
      ...currentData,
      ...pathOr([], ['data', 'children'], res),
    ];
    return this.setState({
      data,
      after: pathOr(data.last, ['data', 'after'], res),
      loadingContent: false,
    });
  }

  render() {
    const { data, loadingContent, endOfContent } = this.state;
    return (
      <>
        {data.map((post) => {
          if (!post.data) return null;
          return <ListingItem key={post.data.id} post={post.data} />;
        })}
        {this.state.data.length === 0
          && !this.state.loadingContent && (
            <p>
              Looks like nothing is rising fast enough in this
              subreddit :(
            </p>
        )}
        <Pagination
          loading={loadingContent}
          endOfContent={endOfContent}
          paginate={this.changePage.bind(this)}
        />
      </>
    );
  }
}

export default Listing;
