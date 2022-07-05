import React from 'react';
import Shop from './Shop';
import Home from './Home';
import Collection from './Collection';
import Page from './Page';
import Blogs from './Blogs';

function Menu() {
    return (
        <div className="navbar-collapse" id="navbarContent">
            <div className="megamenu-content">
                <div className="mainwrap">
                    <ul className="main-menu">
                        <Home/>
                        <Shop/>
                        <Collection/>
                        <Page/>
                        <Blogs/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu