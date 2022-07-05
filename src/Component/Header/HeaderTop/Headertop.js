import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Shoparea from './ShopArea/Shoparea';

function Headertop() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="header-main">
                        {/* logo start */}
                        <Logo/>
                        {/* logo end */}
                        {/* search start */}
                        <Search/>
                        {/* search end */}
                        {/* header-icon start */}
                        <Shoparea/>
                        {/* header-icon end */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headertop