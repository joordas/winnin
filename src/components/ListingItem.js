import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const ListingItem = ({ post }) => {
  const { title, author, domain, thumbnail, created_utc, url } = post;
  moment.locale('pt-BR');
  const createdDate = moment(created_utc * 1000).fromNow();
  return (
    <Wrapper>
      <ThumbWrapper>
        {thumbnail !== 'self' &&
          thumbnail !== 'default' && (
            <Thumbnail alt={title} src={thumbnail} />
        )}
      </ThumbWrapper>
      <Content>
        <Title>{title}</Title>
        <Info>
          enviado {createdDate} por <span>{author}</span>
        </Info>
        <Domain target="_blank" href={url}>
          <span>{domain}</span>
        </Domain>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-width: 1px 0 0 0;
  border-color: black;
  border-style: solid;
  transition-duration: 0.1s;
  padding: 18px 0;
  margin-top: 8px;
  display: flex;
  &:hover {
    background-color: ${({ theme }) => theme.lightgrey};
  }
`;

const Domain = styled.a`
  text-decoration: underline;
  font-size: 0.6rem;
`;

const Content = styled.div`
  display: flex;
  flex: 0.7;
  flex-direction: column;
`;

const Title = styled.h4`
  font-size: 1rem;
  margin: 0;
`;

const Info = styled.p`
  font-size: 0.6rem;
  margin: 0;
  span {
    color: ${({ theme }) => theme.orange};
  }
`;
const ThumbWrapper = styled.div`
  /* flex: 0.3; */
`;

const Thumbnail = styled.img`
  /* width: 100px;
  height: 100px; */
  flex: 1;
  font-size: 0.2rem;
  margin-right: 12px;
`;

export default ListingItem;
