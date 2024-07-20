'use client';

import { addItem } from '@/actions/addItem';
import { useId } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const Button = () => {
  const status = useFormStatus();
  return (
    <button type="submit" disabled={status.pending}>
      Adicionar
    </button>
  );
};

const FormAddProduct = () => {
  const id = useId();
  const [state, formAction] = useFormState(addItem, {
    errors: [],
  });

  return (
    <>
      <h1>Add Product</h1>
      <form action={formAction}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="price">Price:</label>
        <input type="number" id="price" name="price" required />

        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" />

        <label htmlFor="stock">Stock:</label>
        <input type="number" id="stock" name="stock" />

        <label htmlFor="imported">Imported:</label>
        <input type="checkbox" id="imported" name="imported" />

        {state.errors.map((e) => {
          return <p key={id}>{e}</p>;
        })}

        <Button />
      </form>
    </>
  );
};

export default FormAddProduct;
