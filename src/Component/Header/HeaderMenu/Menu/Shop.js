import React from 'react';
import {Link} from 'react-router-dom';

function Shop() {
    return (
        <li className="menu-link parent">
            <Link to="javascript:void(0)" className="link-title">
                <span className="sp-link-title">Shop</span>
                <i className="fa fa-angle-down" />
            </Link>
            <Link
                to="#collapse-mega-menu"
                data-bs-toggle="collapse"
                className="link-title link-title-lg"
            >
                <span className="sp-link-title">Shop</span>
                <i className="fa fa-angle-down" />
            </Link>
            <ul
                className="dropdown-submenu mega-menu collapse"
                id="collapse-mega-menu"
            >
                <li className="megamenu-li parent">
                    <h2 className="sublink-title">Fresh food</h2>
                    <Link
                        to="#collapse-sub-mega-menu"
                        data-bs-toggle="collapse"
                        className="sublink-title sublink-title-lg"
                    >
                        <span>Fresh food</span>
                        <i className="fa fa-angle-down" />
                    </Link>
                    <ul
                        className="dropdown-supmenu collapse"
                        id="collapse-sub-mega-menu"
                    >
                        <li className="supmenu-li">
                            <Link to="/Product">Fruit &amp; nut</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Snack food</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">
                                Organics nut gifts
                            </Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Non-dairy</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Mayonnaise</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Milk almond</Link>
                        </li>
                    </ul>
                </li>
                <li className="megamenu-li parent">
                    <h2 className="sublink-title">Mixedfruits</h2>
                    <Link
                        to="#collapse-fruits-menu"
                        data-bs-toggle="collapse"
                        className="sublink-title sublink-title-lg"
                    >
                        <span>Mixedfruits</span>
                        <i className="fa fa-angle-down" />
                    </Link>
                    <ul
                        className="dropdown-supmenu collapse"
                        id="collapse-fruits-menu"
                    >
                        <li className="supmenu-li">
                            <Link to="/Product">Oranges</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Coffee creamers</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Ghee beverages</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Ranch salad</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Hemp milk</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Nuts &amp; seeds</Link>
                        </li>
                    </ul>
                </li>
                <li className="megamenu-li parent">
                    <h2 className="sublink-title">
                        Bananas &amp; plantains
                    </h2>
                    <Link
                        to="#collapse-banana-menu"
                        data-bs-toggle="collapse"
                        className="sublink-title sublink-title-lg"
                    >
                        <span>Bananas &amp; plantains</span>
                        <i className="fa fa-angle-down" />
                    </Link>
                    <ul
                        className="dropdown-supmenu collapse"
                        id="collapse-banana-menu"
                    >
                        <li className="supmenu-li">
                            <Link to="/Product">Fresh gala</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Fresh berries</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Fruit &amp; nut</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">
                                Fifts mixed fruits
                            </Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Oranges</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Oranges</Link>
                        </li>
                    </ul>
                </li>
                <li className="megamenu-li parent">
                    <h2 className="sublink-title">
                        Apples berries
                    </h2>
                    <Link
                        to="#collapse-apple-menu"
                        data-bs-toggle="collapse"
                        className="sublink-title sublink-title-lg"
                    >
                        <span>Apples berries</span>
                        <i className="fa fa-angle-down" />
                    </Link>
                    <ul
                        className="dropdown-supmenu collapse"
                        id="collapse-apple-menu"
                    >
                        <li className="supmenu-li">
                            <Link to="/Product">Pears produce</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Bananas</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">Natural grassbeab</Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">
                                Fresh green orange
                            </Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">
                                Fresh organic reachter
                            </Link>
                        </li>
                        <li className="supmenu-li">
                            <Link to="/Product">
                                Balckberry 100%organic
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    )
}

export default Shop