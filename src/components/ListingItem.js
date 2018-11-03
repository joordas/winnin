import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const ListingItem = ({ post }) => {
  // console.log(post);
  const { title, author, domain, thumbnail, created, url } = post;
  return (
    <Wrapper>
      <Thumbnail alt={title} src={thumbnail} />
      <p>{title}</p>
      <p>
        Enviado {created} <span>por</span> {author}
      </p>
      <Link href={url}>
        <a>{domain}</a>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-width: 2px 0 0 0;
  border-color: black;
  border-style: solid;
  transition-duration: 0.1s;
  &:hover {
    background-color: lightgrey;
  }
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

export default ListingItem;
