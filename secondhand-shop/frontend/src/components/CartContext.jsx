import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartMessage, setCartMessage] = useState('');
    const [lastTriedItemId, setLastTriedItemId] = useState(null);

    const addToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);
        const currentQty = existingItem ? existingItem.quantity : 0;

        if (currentQty < product.stock) {
            if (existingItem) {
                setCartItems((prev) =>
                    prev.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
            } else {
                setCartItems((prev) => [...prev, { ...product, quantity: 1 }]);
            }

            setCartMessage('');
            setLastTriedItemId(null);
            return true;
        } else {
            setCartMessage('Out of stock!');
            setLastTriedItemId(product.id);
            return false;
        }
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));

        if (lastTriedItemId === id) {
            setCartMessage('');
            setLastTriedItemId(null);
        }
    };

    const clearCart = () => {
        setCartItems([]);
        setCartMessage('');
        setLastTriedItemId(null);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                cartMessage,
                lastTriedItemId
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;
