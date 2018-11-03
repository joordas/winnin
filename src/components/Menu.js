import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { withRouter } from 'next/router';

const Menu = ({ tabs, router }) => {
  const { pathname } = router;
  return (
    <Wrapper>
      <List>
        {tabs.map(tab => (
          <LinkWrapper key={tab} selected={`/${tab}` === pathname}>
            <Link href={`/${tab}`}>
              <a>
                <Item>{tab}</Item>
              </a>
            </Link>
          </LinkWrapper>
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const LinkWrapper = styled.div`
  margin: 0 5px;
  border-radius: 6px;
  background-color: ${props => (props.selected ? props.theme.orange : props.theme.grey)};
  transition-duration: 0.1s;
  &:hover {
    background-color: ${({ theme }) => theme.lightgrey};
  }
`;

const Item = styled.li`
  color: white;
  padding: 5px 20px;
  flex-grow: 1;
  min-width: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition-duration: 0.1s;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;
`;

export default withRouter(Menu);
