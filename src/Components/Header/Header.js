import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt=""/>
            <div>
                <a href="/shop">Order</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manager Inver</a>
                <a href="/about">Shop</a>
            </div>
        </nav>
    );
};

export default Header;