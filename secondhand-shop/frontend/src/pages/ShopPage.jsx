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
                {filteredProducts.map((product) => (
                    <div className="product-card" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img
                                src={`http://localhost:5000${product.image_url}`}
                                alt={product.name}
                            />
                            <h3>{product.name}</h3>
                            <p>{product.price} $</p>
                        </Link>
                        <button
                            className="add-to-cart"
                            onClick={() => {
                                addToCart(product);
                                setAddedItemId(product.id);
                                setTimeout(() => setAddedItemId(null), 1500);
                            }}
                        >
                            ADD TO CART
                        </button>

                        {addedItemId === product.id && (
                            <p className="added-msg">ADDED!</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopPage;
