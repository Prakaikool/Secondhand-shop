import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CSS/AdminDashboard.css';

function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:5000/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Failed to load products', err));
    }, []);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this product?')) {
            await axios.delete(`http://localhost:5000/products/${id}`);
            setProducts((prev) => prev.filter((p) => p.id !== id));
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <button onClick={() => navigate('/')}>Go to Home</button>
            <button
                onClick={() => {
                    localStorage.clear();
                    navigate('/login');
                }}
            >
                Logout
            </button>

            <button onClick={() => navigate('/admin/add-product')}>
                Add New Product
            </button>

            <div className="product-list">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img
                            src={`http://localhost:5000${product.image_url}`}
                            alt={product.name}
                        />
                        <h3>{product.name}</h3>
                        <p>{product.price} $</p>
                        <button
                            onClick={() =>
                                navigate(`/admin/edit-product/${product.id}`)
                            }
                        >
                            Edit
                        </button>
                        <button onClick={() => handleDelete(product.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminDashboard;
