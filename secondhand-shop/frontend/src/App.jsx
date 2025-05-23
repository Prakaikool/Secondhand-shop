import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';
import SalePage from './pages/SalePage';
import AdminPage from './pages/AdminPage';
import Navbar from './components/Navbar';
import BottomNavbar from './components/BottomNavbar';
import ProductDetail from './pages/ProductDetail';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/sale" element={<SalePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
            <BottomNavbar />
        </Router>
    );
}

export default App;
