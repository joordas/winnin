import React from 'react';
import Loading from 'react-loading';
import styled from 'styled-components';

const Pagination = ({ paginate, loading, endOfContent }) => (
  <PaginationWrapper>
    {loading ? (
      <Loading type="bars" color="#FF5502" />
    ) : (
      <Button
        aria-disabled={endOfContent}
        disabled={endOfContent}
        onClick={paginate}
      >
        <span>
          {endOfContent ? 'Não há mais itens' : '+ Ver Mais'}
        </span>
      </Button>
    )}
  </PaginationWrapper>
);

const PaginationWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.grey};
  border-radius: 6px;
  margin-bottom: 12px;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.grey};
  border: none;
  color: ${({ theme }) => theme.white};
  flex: 1;
  padding: 20px;
  border-radius: 6px;
  &[aria-disabled='true'] {
    background-color: ${({ theme }) => theme.lightgrey};
    color: ${({ theme }) => theme.black};
  }
`;

export default Pagination;
