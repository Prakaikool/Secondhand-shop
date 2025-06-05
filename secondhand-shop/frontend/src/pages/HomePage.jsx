import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CSS/Homepage.css';
import searchIcon from '../assets/icons/search.png';

function HomePage() {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get('http://localhost:5000/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Failed to load products', err));
    }, []);

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    );

    const newProducts = filteredProducts.slice(0, 3);

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
                    <button className="search-button">
                        <img
                            src={searchIcon}
                            alt="Search"
                            className="search-icon"
                        />
                    </button>
                </div>
            </div>

            {}
            <h2 className="section-title">See what's new</h2>
            <div className="product-grid">
                {newProducts.map((product) => (
                    <Link
                        to={`/products/${product.id}`}
                        key={product.id}
                        className="product-card"
                    >
                        <img
                            src={`http://localhost:5000${product.image_url}`}
                            alt={product.name}
                        />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </Link>
                ))}
            </div>
            <div className='button-shop'>
                {' '}
                <button className='more-btn' onClick={() => navigate('/shop')}>View all products</button>
            </div>

            {}
            <section className="about-preview">
                <h2>About Shupa Shupa</h2>
                <p>
                    We're a small brand driven by passion for sustainability and
                    style. Every item is selected with care and intention.
                </p>
                <button onClick={() => navigate('/about')}>Learn More</button>
            </section>
        </div>
    );
}

export default HomePage;
