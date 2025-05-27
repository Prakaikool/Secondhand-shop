import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <header>
            <div className="navbar-band">
                <h2>
                    Shupa Shupa <br />
                    Secondhand
                </h2>
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
