import { Link } from 'react-router-dom';
import '/Secondhand-shop/secondhand-shop/frontend/src/pages/CSS/navbar.css';
import cartIcon from '../assets/icons/cart.png';

function Navbar() {
    return (
        <header className="navbar">
            <div className="top-navbar">Worldwide shipping!</div>
            <div className="navbar-main">
                <div className="brand">
                    <h1>Shupa Shupa</h1>
                    <h2> Secondhand</h2>
                </div>
                <div className="cart">
                    <Link to="/cart" className="cart-icon">
                        <img src={cartIcon} alt="Cart" className="icon" />
                    </Link>
                </div>
            </div>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">HOME</Link>
                    </li>
                    <li>
                        <Link to="/shop">SHOP</Link>
                    </li>
                    <li>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
