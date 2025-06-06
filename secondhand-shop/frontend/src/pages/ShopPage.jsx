import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CSS/ShopPage.css';
import { useContext } from 'react';
import CartContext from '../components/CartContext';

function ShopPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [addedItemId, setAddedItemId] = useState(null);
    const [outOfStockId, setOutOfStockId] = useState(null);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        axios
            .get('http://localhost:5000/products')
            .then((res) => setProducts(res.data))
            .catch((err) => console.error('Failed to load products', err));

        axios
            .get('http://localhost:5000/categories')
            .then((res) => setCategories(res.data))
            .catch((err) => console.error('Failed to load categories', err));
    }, []);

    const filteredProducts =
        selectedCategory === 'all'
            ? products
            : products.filter(
                  (p) => p.category_id === Number(selectedCategory)
              );

    return (
        <div className="shop-page">
            <h2>All Products</h2>

            <div className="filter-container">
                <label htmlFor="category">Filter by Category :</label>
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
                {filteredProducts.map((product) => {
                    const isOutOfStock = product.stock === 0;

                    return (
                        <div className="product-card" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img
                                    src={`http://localhost:5000${product.image_url}`}
                                    alt={product.name}
                                />
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                            </Link>
                            <button
                                className="add-to-cart"
                                onClick={() => {
                                    const wasAdded = addToCart(product);
                                    if (wasAdded) {
                                        setAddedItemId(product.id);
                                        setTimeout(
                                            () => setAddedItemId(null),
                                            1500
                                        );
                                    } else {
                                        setOutOfStockId(product.id);
                                        setTimeout(
                                            () => setOutOfStockId(null),
                                            1500
                                        );
                                    }
                                }}
                                disabled={product.stock === 0}
                            >
                                {product.stock === 0
                                    ? 'OUT OF STOCK'
                                    : 'ADD TO CART'}
                            </button>

                            {addedItemId === product.id && !isOutOfStock && (
                                <p className="added-msg">Item added!</p>
                            )}

                            {outOfStockId === product.id && (
                                <p className="stock-msg">
                                    Not enough in stock!
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ShopPage;
