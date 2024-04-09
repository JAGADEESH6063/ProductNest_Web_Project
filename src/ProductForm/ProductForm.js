// ProductForm.js
import React, { useState, useEffect } from 'react';
import "./ProductForm.css";

const ProductForm = ({ onSubmit, product }) => {
  const [name, setName] = useState(product ? product.name : '');
  const [description, setDescription] = useState(product ? product.description : '');
  const [price, setPrice] = useState(product ? product.price : '');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
    } else {
      setName('');
      setDescription('');
      setPrice('');
    }
  }, [product]);

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, description, price });
  };

  return (
    <form class="form-inline" onSubmit={handleSubmit}>
    <input type="text" class="form-control mb-2 mr-sm-2 input-gap" id="inlineFormInputName2" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required/>
    <input type="text" class="form-control mb-2 mr-sm-2 input-gap" id="inlineFormInputName2" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required/>
    <input type="Number" step="0.01" class="form-control mb-2 mr-sm-2 input-gap" id="inlineFormInputName2" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required/>
    <button type="submit" class="btn btn-primary mb-2 input-gap">Submit</button>
    </form>
  );
};
export default ProductForm;