import React from 'react'
import {Link} from 'react-router-dom';

function Collection() {
    return (
        <li className="menu-link parent">
            <Link to="/Gridlist" className="link-title">
                <span className="sp-link-title">Collection</span>
                <i className="fa fa-angle-down" />
            </Link>
            <Link
                to="#collapse-banner-menu"
                data-bs-toggle="collapse"
                className="link-title link-title-lg"
            >
                <span className="sp-link-title">Collection</span>
                <i className="fa fa-angle-down" />
            </Link>
            <ul
                className="dropdown-submenu banner-menu collapse"
                id="collapse-banner-menu"
            >
                <li className="menu-banner">
                    <Link
                        to="/Gridlist"
                        className="menu-banner-img"
                    >
                        <img
                            src="image/menu-banner01.jpg"
                            alt="menu-image"
                            className="img-fluid"
                        />
                    </Link>
                    <Link
                        to="/Gridlist"
                        className="menu-banner-title"
                    >
                        <span>Bestseller</span>
                    </Link>
                </li>
                <li className="menu-banner">
                    <Link
                        to="/Gridlist"
                        className="menu-banner-img"
                    >
                        <img
                            src="image/menu-banner02.jpg"
                            alt="menu-image"
                            className="img-fluid"
                        />
                    </Link>
                    <Link
                        to="/Gridlist"
                        className="menu-banner-title"
                    >
                        <span>Special product</span>
                    </Link>
                </li>
                <li className="menu-banner">
                    <Link
                        to="/Gridlist"
                        className="menu-banner-img"
                    >
                        <img
                            src="image/menu-banner03.jpg"
                            alt="mneu image"
                            className="img-fluid"
                        />
                    </Link>
                    <Link
                        to="/Gridlist"
                        className="menu-banner-title"
                    >
                        <span>Featured product</span>
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default Collection