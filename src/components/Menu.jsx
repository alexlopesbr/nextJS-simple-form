import Link from 'next/link';
import React from 'react';

const Menu = () => {
  return (
    <ul>
      <li>
        <Link href={'/'}>Home</Link>
      </li>
      <li>
        <Link href={'/products'}>Products</Link>
      </li>
      <li>
        <Link href={'products/add-new'}>Add New Product</Link>
      </li>
    </ul>
  );
};

export default Menu;
