import React from 'react'
import Account from './Account'
import Cartwrap from './Cartwrap'
import Wishlist from './Wishlist'

function Shoparea() {
    return (
        <div className="header-element right-block-box">
            <ul className="shop-element">
                <li className="side-wrap nav-toggler">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarContent"
                    >
                        <span className="line" />
                    </button>
                </li>
                <Account/>
                <Wishlist/>
                <Cartwrap/>
            </ul>
        </div>
    )
}

export default Shoparea