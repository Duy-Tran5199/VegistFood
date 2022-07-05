import React from 'react';
import {Link} from 'react-router-dom';

function Page() {
    return (
        <li className="menu-link parent">
            <Link to="javascript:void(0)" className="link-title">
                <span className="sp-link-title">Pages</span>
                <i className="fa fa-angle-down" />
            </Link>
            <Link
                to="#collapse-page-menu"
                data-bs-toggle="collapse"
                className="link-title link-title-lg"
            >
                <span className="sp-link-title">Pages</span>
                <i className="fa fa-angle-down" />
            </Link>
            <ul
                className="dropdown-submenu sub-menu collapse"
                id="collapse-page-menu"
            >
                <li className="submenu-li">
                    <Link
                        to="/AboutUs"
                        className="submenu-link"
                    >
                        About us
                    </Link>
                </li>
                <li className="submenu-li">
                    <Link
                        to="javascript:void(0)"
                        className="g-l-link"
                    >
                        <span>Account</span>{" "}
                        <i className="fa fa-angle-right" />
                    </Link>
                    <Link
                        to="#account-menu"
                        data-bs-toggle="collapse"
                        className="sub-link"
                    >
                        <span>Account</span>{" "}
                        <i className="fa fa-angle-down" />
                    </Link>
                    <ul
                        className="collapse blog-style-1"
                        id="account-menu"
                    >
                        <li>
                            <Link
                                to="order-history.html"
                                className="sub-style"
                            >
                                <span>Order</span>
                            </Link>
                            <Link
                                to="order-history.html"
                                className="blog-sub-style"
                            >
                                <span>Order</span>
                            </Link>
                            <Link
                                to="profile.html"
                                className="sub-style"
                            >
                                <span>Profile</span>
                            </Link>
                            <Link
                                to="profile.html"
                                className="blog-sub-style"
                            >
                                <span>Profile</span>
                            </Link>
                            <Link
                                to="pro-wishlist.html"
                                className="sub-style"
                            >
                                <span>Wishlist</span>
                            </Link>
                            <Link
                                to="pro-wishlist.html"
                                className="blog-sub-style"
                            >
                                <span>Wishlist</span>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="submenu-li">
                    <Link
                        to="billing-info.html"
                        className="submenu-link"
                    >
                        Billing info
                    </Link>
                </li>
                <li className="submenu-li">
                    <Link to="faq%27s.html" className="submenu-link">
                        Faq's
                    </Link>
                </li>
                <li className="submenu-li">
                    <Link to="contact.html" className="submenu-link">
                        Contact us
                    </Link>
                </li>
                <li className="submenu-li">
                    <Link
                        to="terms-conditions.html"
                        className="submenu-link"
                    >
                        Terms &amp; conditions
                    </Link>
                </li>
            </ul>
        </li>
    )
}

export default Page