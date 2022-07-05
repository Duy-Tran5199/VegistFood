import React from 'react';
import { Link } from 'react-router-dom';

function Hotline() {
    return (
        <div className="img-hotline">
            <div className="image-line">
                <Link to="javascript:void(0)">
                    <img
                        src="image/icon_contact.png"
                        className="img-fluid"
                        alt="image-icon"
                    />
                </Link>
            </div>
            <div className="image-content">
                <span className="hot-l">Hotline:</span>
                <span>0969 609 003</span>
            </div>
        </div>
    )
}

export default Hotline