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
            </div>
        </footer>
    );
};

export default BottomNavbar;
