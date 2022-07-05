import React from 'react';
import { Link } from 'react-router-dom';


function Logo() {
    return (
        <div className="header-element logo">
            <Link to="/">
                <img
                    src="image/logo1.png"
                    alt="logo-image"
                    className="img-fluid"
                />
            </Link>
        </div>
    )
}

export default Logo