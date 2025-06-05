import React from 'react';
import '../pages/CSS/ProductCard.css';

function ProductCard({ product, onEdit, onDelete }) {
    return (
        <div className="product-card">
            <img
                src={`http://localhost:5000${product.image_url}`}
                alt={product.name}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Size: {product.size}</p>
            <p>Stock: {product.stock}</p>
            <div className="actions">
                <button className='edit-btn' onClick={() => onEdit(product)}>Edit</button>
                <button className='delete-btn'onClick={() => onDelete(product.id)}>Delete</button>
            </div>
        </div>
    );
}

export default ProductCard;
