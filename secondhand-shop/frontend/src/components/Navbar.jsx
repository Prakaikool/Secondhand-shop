import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header className="navbar">
            <div className="top-navbar">Worldwide shipping!</div>
            <div className="navbar-main">
                <div className="navbar-band">
                    <h1>Shupa Shupa</h1>
                    <h2> Secondhand</h2>
                </div>
                <Link to="/cart" className="cart-icon">
                    CART
                </Link>
            </div>
            <nav>
                <ul className="nav-links"></ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/shop">SHOP</Link>
                </li>
                <li>
                    <Link to="/sale">SALE</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
            </nav>
        </header>
    );
}

export default Navbar;
