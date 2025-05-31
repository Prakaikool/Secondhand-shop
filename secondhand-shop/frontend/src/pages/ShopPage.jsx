import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CSS/ShopPage.css';

function ShopPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        axios
            .get('http://localhost:5000/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Failed to load products', err));

        axios
            .get('http://localhost:5000/categories')
            .then((res) => setCategories(res.data))
            .catch((err) => console.error('Fail to load categories', err));
    }, []);

    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter(
                  (p) => p.category_id === Number(selectedCategory)
              );

    return (
        <div className="shop-page">
            <h2>All products</h2>
            <div className="filter-container">
                <label htmlFor="category">Filter by Category: </label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="all">All</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="product-container">
                {filteredProducts.map((product) => (
                    <Link
                        to={`/products/${product.id}`}
                        className="product-card"
                        key={product.id}
                    >
                        <img src={product.image_url} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price} $</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ShopPage;
