import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:500/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Failed to load products', err));
    }, []);

    return (
        <div className="homepage">
            <div className="cover-container">
                <img
                    src="/clothes-cover-image.jpeg"
                    alt="Secondhand clothes"
                    className="cover-iamge"
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
        </div>
    );
}

export default HomePage;
