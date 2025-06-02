import { useContext } from 'react';
import CartContext from '../components/CartContext';
import './CSS/Cart.css';
import { Link } from 'react-router-dom';

function CartPage() {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                    <Link to="/shop" className="shop-link">
                        SHOP OUR PRODUCTS
                    </Link>
                </div>
            ) : (
                <>
                    <ul className="cart-list">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img
                                    src={`http://localhost:5000${item.image_url}`}
                                    alt={item.name}
                                    className="cart-img"
                                />
                                <div className="cart-info">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>Qty: {item.quantity}</p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>Total: ${total.toFixed(2)}</h3>
                        <button onClick={clearCart} className="clear-button">
                            CLEAR CART
                        </button>
                        <button className="pay-button">CHECKOUT</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default CartPage;
