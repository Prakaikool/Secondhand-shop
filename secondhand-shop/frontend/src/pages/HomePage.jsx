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
            <div className="button-shop">
                {' '}
                <button className="more-btn" onClick={() => navigate('/shop')}>
                    View all products
                </button>
            </div>

            <div className="info-row">
                <section className="about-preview">
                    <h2>About Shupa Shupa</h2>
                    <p>
                        Shupa Shupa began with a simple idea to turn forgotten
                        fashion into something meaningful. We believe that
                        secondhand isn't second best. Each piece is chosen not
                        just for style, but for the story it continues to tell.
                        From our home in Sweden to wardrobes around the world,
                        we're here to make slow fashion feel special.
                    </p>
                    <button onClick={() => navigate('/about')}>
                        Learn More
                    </button>
                </section>

                <section className="newsletter">
                    <h2>Stay Updated</h2>
                    <p>
                        Be the first to know about new arrivals, style tips, and
                        exclusive offers.
                    </p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Your email..." />
                        <button>Subscribe</button>
                    </div>
                </section>
            </div>

            <div className="inspiration-grid">
                <h2>Match Your Style</h2>
                <div className="preview-cards">
                    <div className="preview-card">
                        <img
                            src="/product-preview-01.jpeg"
                            alt="Street Style Tweed Look"
                        />
                        <p className="caption">
                            Night out style
                            <br />
                            Tweed jacket + corset + pink skirt
                        </p>
                    </div>
                    <div className="preview-card">
                        <img
                            src="/product-preview-02.jpeg"
                            alt="Art Gallery Outfit"
                        />
                        <p className="caption">
                            Elegant day style <br />
                            Neutral sweater + floral skirt
                        </p>
                    </div>
                </div>
            </div>

            <section className="mission">
                <p>
                    - We make fashion circular by giving clothes a second life and
                    helping you shop with purpose -
                </p>
            </section>
        </div>
    );
}

export default HomePage;
