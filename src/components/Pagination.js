import React from 'react';

const Pagination = ({ paginate }) => {
  return (
    <button onClick={() => paginate()}>
      <h1>paginar</h1>
    </button>
  );
};

export default Pagination;
