import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className="header-contaier">
            <img src='Logo.svg' alt="" />
            <div className="nav-link">
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;