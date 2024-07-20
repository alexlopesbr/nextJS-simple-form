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
  const response = await fetch('https://api.origamid.online/produtos', {
    next: {
      revalidate: timeInSeconds,
    },
  });
  const products = (await response.json()) as Product[];

  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.nome} - {product.preco}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductsList;
