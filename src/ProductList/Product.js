// Product.js
import React from 'react';
import './Product.css';
const Product = ({ product, onEdit, onDelete }) => (
    <div class="container">
      <div class="row cols-1 cols-sm-2 cols-md-3 cols-lg-4 g-3">
      {product.map(product => (
      <div className="col" key={product.id}>
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="card-text">
              <h2>{product.name}</h2>
              <p>Description: {product.description}</p>
              <p>Price: {product.price}</p>
              </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => onEdit(product)}>Edit</button>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => onDelete(product.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>  
);
export default Product;