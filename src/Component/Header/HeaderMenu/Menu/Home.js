import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <li className="menu-link parent">
            <Link to="/" className="link-title">
                <span className="sp-link-title">Home</span>
            </Link>
        </li>
    )
}

export default Home