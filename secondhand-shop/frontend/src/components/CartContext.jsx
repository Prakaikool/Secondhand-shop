import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartMessage, setCartMessage] = useState('');

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            if (existingItem.quantity < product.stock) {
                setCartItems((prev) =>
                    prev.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
                setCartMessage('');
            } else {
                setCartMessage('Out of stock!');
            }
        } else {
            if (product.stock > 0) {
                setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
                setCartMessage('');
            } else {
                setCartMessage('Out of stock!');
            }
        }
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                cartMessage
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
