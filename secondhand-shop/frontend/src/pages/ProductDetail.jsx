import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import CartContext from '../components/CartContext';
import './CSS/ProductsDetail.css';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);
    const [mainImage, setMainImage] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:5000/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                setMainImage(res.data.images?.[0] || '/fallback.jpg');
            })
            .catch((err) => console.error('Failed to load product', err));
    }, [id]);

    if (!product) return <p className="loading">Loading...</p>;

    return (
        <div className="product-detail">
            <div className="product-image-section">
                <img
                    src={`http://localhost:5000${mainImage}`}
                    alt={product.name}
                    className="product-detail-img"
                />
                <div className="thumbnail-row">
                    {product.images.map((img, index) => (
                        <img
                            key={index}
                            src={`http://localhost:5000${img}`}
                            alt={`thumbnail-${index}`}
                            className="thumb"
                            onClick={() => setMainImage(img)}
                        />
                    ))}
                </div>
            </div>

            <div className="product-detail-info">
                <h2>{product.name}</h2>
                <p className="product-price">${product.price}</p>
                <p className="product-description">{product.description}</p>
                <p className="product-size">Size: {product.size}</p>
                <p className="product-stock">Stock: {product.stock}</p>
                <button
                    className="add-to-cart"
                    onClick={() => addToCart(product)}
                >
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}

export default ProductDetail;
