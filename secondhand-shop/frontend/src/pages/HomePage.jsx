import axios from 'axios';
import { useState, useEffect } from 'react';

function HomePage() {
    const [products, setProducts] = useState([]);

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
            </div>
        </div>
    );
}

export default HomePage;
