import React from 'react';
import styled from 'styled-components';

const config = {
  redditDomain: 'https://www.reddit.com',
  categories: ['hot', 'new', 'rising'],
  initialPostsToFech: 5,
  fetchPerPage: 10,
  defaultListing: '/hot',
  defaultSub: 'reactjs',
};
export const PageTitleHeader = () => (
  <PageTitle>
    REACT
    <span>JS</span>
  </PageTitle>
);

const PageTitle = styled.h1`
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 2.4rem;
  background-color: ${({ theme }) => theme.darkgrey};
  color: ${({ theme }) => theme.white};
  span {
    color: ${({ theme }) => theme.orange};
  }
`;

export default config;
