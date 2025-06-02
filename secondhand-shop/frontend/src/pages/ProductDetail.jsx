import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CartContext from '../components/CartContext';
import './CSS/ProductsDetail.css';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error('Failed to load product', err));
    }, [id]);

    if (!product) return <p className="loading">Loading...</p>;

    return (
        <div className="product-detail">
            <img
                src={`http://localhost:5000${product.image_url}`}
                alt={product.name}
                className="product-detail-img"
            />
            <div className="product-detail-info">
                <h2>{product.name}</h2>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>
                <button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                >
                    🛒 Add to Cart
                </button>
            </div>
        </div>
    );
}

export default ProductDetail;
