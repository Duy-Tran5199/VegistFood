import React from 'react';
import { Link } from 'react-router-dom';

function Blogs() {
    return (
        <li className="menu-link parent">
            <Link to={"/Blogs"} className="link-title">
                <span className="sp-link-title">Blogs</span>
            </Link>
        </li>
    )
}

export default Blogs