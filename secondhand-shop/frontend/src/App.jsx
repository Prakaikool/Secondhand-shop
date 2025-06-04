import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import ProductDetail from './pages/ProductDetail';
import AdminApp from './admin/AdminApp';
import './main.css';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/admin/*" element={<AdminApp />} />
            </Routes>
            <BottomNavbar />
        </>
    );
}

export default App;
