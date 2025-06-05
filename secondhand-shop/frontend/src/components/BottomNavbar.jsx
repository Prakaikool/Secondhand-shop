import '/Secondhand-shop/secondhand-shop/frontend/src/pages/CSS/BottomNavbar.css';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <footer className="bottom-navbar">
            <div className="bottom-content">
                <div className="shop-info">
                    <h2>About...</h2>
                    <p>
                        Shupa Shupa is a small secondhand shop built from love
                        and sustainability. Every item has a story. Let's make
                        secondhand your first choice.
                    </p>
                    <p>Active everyday 11am - 7pm</p>
                    <p>
                        Email:{' '}
                        <a href="mailto:shupashupa@support.com">
                            shupashupa@support.com
                        </a>
                    </p>
                </div>
                <div className="footer-links">
                    <h2>Menu</h2>
                    <ul>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/shipping-policy">Shipping policy</Link>
                        </li>
                        <li>
                            <Link to="/return-policy">Return policy</Link>
                        </li>
                        <li>
                            <Link to="/login">Admin login</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">© Shupa Shupa Secondhand 2025</div>
        </footer>
    );
};

export default BottomNavbar;
