import ProductsList from '@/components/ProductsList';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default async function ProductsPage() {
  return (
    <main>
      <ProductsList />
    </main>
  );
}
