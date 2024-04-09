// ProductList.js
import React from 'react';
import Product from './Product';
import './ProductList.css';

const ProductList = ({ products, onEdit, onDelete }) => (
  <div className='list'>
      <Product product={products} onEdit={onEdit} onDelete={onDelete} />
  </div>
);
export default ProductList;