import React from 'react';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import Headertop from './HeaderTop/Headertop';
import MiniCart from './MiniCart';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header-area">
            <div className="header-main-area">
                <Headertop/>
                <HeaderMenu/>
            </div>
            {/*mini Cart start*/}
            <MiniCart/>
            {/*mini Cart end*/}
        </header>
    )
}

export default Header;