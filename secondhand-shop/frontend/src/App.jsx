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
import AdminDashboard from './pages/AdminDashboard';
import ScrollToTop from './components/ScrollToTop';
import './main.css';

function ProtectedRoute({ children }) {
    const userId = localStorage.getItem('userId');
    return userId ? children : <Navigate to="/login" replace />;
}

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/dashboard" element={<AdminDashboard />} />
                <Route
                    path="/admin"
                    element={
                        <ProtectedRoute>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
            <BottomNavbar />
        </>
    );
}

export default App;
