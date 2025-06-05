import { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductCard from '../components/ProductCard';
import './CSS/AdminDashboard.css'

export default function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
      fetchProducts();
  }, []);

  const fetchProducts = async () => {
      try {
          const res = await fetch('http://localhost:5000/products');
          const data = await res.json();
          setProducts(data);
      } catch (err) {
          console.error('Failed to load products:', err);
      }
  };

  const handleSave = async (formData) => {
      const isEdit = Boolean(editingProduct);
      const url = isEdit
          ? `http://localhost:5000/products/${editingProduct.id}`
          : 'http://localhost:5000/products';

      const method = isEdit ? 'PUT' : 'POST';

      try {
          await fetch(url, {
              method,
              body: formData
          });
          setShowForm(false);
          setEditingProduct(null);
          fetchProducts();
      } catch (err) {
          console.error('Failed to save product:', err);
      }
  };

  const handleEdit = (product) => {
      setEditingProduct(product);
      setShowForm(true);
  };

  const handleDelete = async (id) => {
      if (!window.confirm('Confirm to delete the product!')) return;
      try {
          await fetch(`http://localhost:5000/products/${id}`, {
              method: 'DELETE'
          });
          fetchProducts();
      } catch (err) {
          console.error('Failed to delete product:', err);
      }
  };

  return (
      <div className="admin-dashboard">
          <h2>Welcome to Shupa Admin!</h2>
          <button
              className="add-product-btn"
               onClick={() => {
                  setEditingProduct(null);
                  setShowForm(true);
              }}
          >
              + Add product
          </button>

          {showForm && (
              <ProductForm
                  product={editingProduct}
                  onSave={handleSave}
                  onCancel={() => {
                      setShowForm(false);
                      setEditingProduct(null);
                  }}
              />
          )}

          <div className="product-list">
              {products.map((product) => (
                  <ProductCard
                      key={product.id}
                      product={product}
                      onEdit={() => handleEdit(product)}
                      onDelete={() => handleDelete(product.id)}
                  />
              ))}
          </div>
      </div>
  );
}
