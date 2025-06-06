import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import ProductCard from '../components/ProductCard';
import './CSS/AdminDashboard.css';

export default function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const [editingProduct, setEditingProduct] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        if (!userId) {
            navigate('/login');
        } else {
            fetchProducts();
        }
    }, [navigate]);

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

    const confirmLogout = () => {
        setShowLogoutModal(true);
    };

    const performLogout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        navigate('/login');
    };

    return (
        <div className="admin-dashboard">
            <h2>Welcome to Shupa Admin!</h2>
            <p className="product-count">
                You currently have {products.length} product(s)
            </p>
            <div className="primary-btn">
                <button
                    className="add-product-btn"
                    onClick={() => {
                        setEditingProduct(null);
                        setShowForm(true);
                    }}
                >
                    + Add product
                </button>
                <button className="logout-btn" onClick={confirmLogout}>
                    Log out
                </button>
            </div>

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

            {showLogoutModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <p>Do you want to log out?</p>
                        <button className="yes-btn" onClick={performLogout}>
                            Yes
                        </button>
                        <button
                            className="no-btn"
                            onClick={() => setShowLogoutModal(false)}
                        >
                            No
                        </button>
                    </div>
                </div>
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
