import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header-contaier">
            <Link to="/shop"><img src='Logo.svg' alt="" /></Link>
            <div className="nav-link">
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;