import React from 'react';
import Hotline from './Hotline';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom';

function HeaderMenu() {
    return (
        <div className="header-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="main-menu-area">
                            <div className="main-navigation navbar-expand-xl">
                                <div className="box-header menu-close">
                                    <button className="close-box" type="button">
                                        <i className="ion-close-round" />
                                    </button>
                                </div>
                                {/* menu start */}
                                <Menu/>
                                {/* menu end */}
                              <Hotline/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMenu