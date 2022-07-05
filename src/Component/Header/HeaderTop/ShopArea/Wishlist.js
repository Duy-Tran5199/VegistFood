import React from 'react'
import { Link } from 'react-router-dom'

function Wishlist() {
    return (
        <li className="side-wrap wishlist-wrap">
            <Link to="/Wishlist" className="header-wishlist">
                <span className="wishlist-icon">
                    <i className="icon-heart" />
                </span>
                <span className="wishlist-counter">0</span>
            </Link>
        </li>
    )
}

export default Wishlist