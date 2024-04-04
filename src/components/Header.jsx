import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Refer-Me</h1>
            <nav>
                <ul>
               
                    <li><a href="/">Home</a></li>
                    <li><a href="/books">Books</a></li>
                    <li><a href="/videos">Videos</a></li>
                    <li><a href="/articles">Articles</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;