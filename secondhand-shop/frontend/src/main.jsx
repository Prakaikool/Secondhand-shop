import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './main.css';
import { CartProvider } from './components/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </React.StrictMode>
);
