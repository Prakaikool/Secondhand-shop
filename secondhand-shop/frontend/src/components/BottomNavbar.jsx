import '/Secondhand-shop/secondhand-shop/frontend/src/pages/CSS/BottomNavbar.css';
import { Link } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <footer className="bottom-navbar">
            <div className="bottom-content">
                <div className="shop-info">
                    <p>
                        Shupa Shupa is a small secondhand shop built from love
                        and sustainability. Every item has a story. Let's make
                        secondhand your first choice.
                    </p>
                    <p>Active everyday 11am–7pm</p>
                    <p>
                        Email:{' '}
                        <a href="mailto:shupashupa@support.com">
                            shupashupa@support.com
                        </a>
                    </p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/customer-service">Customer service</Link>
                        </li>
                        <li>
                            <Link to="/shipping-policy">Shipping Policy</Link>
                        </li>
                        <li>
                            <Link to="/return-policy">Return Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">© Shupa Shupa Secondhand 2025</div>
        </footer>
    );
};

export default BottomNavbar;
