import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    return (
        <div className="shop-page">
            <h2>All products</h2>
            <div className='filter-container'>
              <label htmlFor="category">Filter by Category: </label>
              <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value="all">All</option>{categories.map(cat => (<option key={cat.id} value={cat.id}>{cat.name}</option>))}
              </select>
            </div>

      
        </div>
    );
}

export default ShopPage;
