'use server';

import type { Product } from '@/components/ProductsList';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

function isValidName(name: unknown) {
  return typeof name === 'string' && name.length > 1;
}

function isValidPrice(price: unknown) {
  return typeof price === 'number' && price > 1;
}

export async function addItem(state: { errors: string[] }, formData: FormData) {
  const product: Product = {
    nome: formData.get('name') as string,
    preco: Number(formData.get('price')),
    descricao: formData.get('description') as string,
    estoque: Number(formData.get('stock')),
    importado: formData.get('imported') ? 1 : 0,
  };

  const errors = [];
  if (!isValidName(product.nome)) errors.push('Invalid Name.');
  if (!isValidPrice(product.preco)) errors.push('Invalid Price.');
  if (errors.length > 0) return { errors };

  try {
    const response = await fetch('https://api.origamid.online/produtos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error('Error adding the product.');
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: [error.message],
      };
    }
  }
  revalidatePath('/products');
  redirect('/products');
  // will not reach return, but it is necessary for TypeScript (looking for a best solution)
  return { errors: [] };
}
