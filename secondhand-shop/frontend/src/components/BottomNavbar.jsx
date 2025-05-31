import '/Secondhand-shop/secondhand-shop/frontend/src/pages/CSS/BottomNavbar.css';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <footer className="bottom-navbar">
            <div className="bottom-content">
                <div className="shop-info">
                    <h2>About</h2>
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
                            <Link to="/shop">SHOP</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                        <li>
                            <Link to="/customer-service">CUSTOMER SERVICE</Link>
                        </li>
                        <li>
                            <Link to="/shipping-policy">SHIPPING POLICY</Link>
                        </li>
                        <li>
                            <Link to="/return-policy">RETURN POLICY</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">© Shupa Shupa Secondhand 2025</div>
        </footer>
    );
};

export default BottomNavbar;
