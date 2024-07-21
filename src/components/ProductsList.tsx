import React from 'react';

export type Product = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

const timeInSeconds = 10;

const ProductsList = async () => {
  let products: Product[];

  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      next: {
        revalidate: timeInSeconds,
      },
    });
    products = (await response.json()) as Product[];
  } catch {
    console.error('Failed to fetch products.');
    return <div>Failed to fetch products.</div>;
  }

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.id}>
            {product.nome} - {product.preco}
          </li>
        );
      })}
    </ul>
  );
};

export default ProductsList;
