import React from 'react';
import Link from 'next/link';

const Menu = ({ tabs }) => {
  return (
    <div>
      {tabs.map(tab => (
        <Link key={tab} href={tab}>
          <a>
            <li>{tab}</li>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
