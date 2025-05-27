import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Homepage.css';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:5000/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Failed to load products', err));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="homepage">
            <div className="cover-container">
                <img
                    src="/clothes-cover-image.jpeg"
                    alt="Secondhand clothes"
                    className="cover-image"
                />
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="search-input"
                    />
                    <button className="search-button"></button>
                </div>
            </div>
            <h2 className="section-title">See what's new</h2>
            <div className="product-grid">
                {filteredProducts.map((product) => (
                    <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="product-card"
                    >
                        <img src="" alt="" />
                        <h3>{product.name}</h3>
                        <p>{product.price} $</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
