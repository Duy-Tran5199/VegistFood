import React from 'react';
import { Link } from 'react-router-dom';
function Account() {
    return (
        <li className="side-wrap user-wrap">
            <div className="acc-desk">
                <div className="user-icon">
                    <Link to="/Account" className="user-icon-desk">
                        <span>
                            <i className="icon-user" />
                        </span>
                    </Link>
                </div>
                <div className="user-info">
                    <span className="acc-title">Account</span>
                    <div className="account-login">
                        <Link to="/Register">Register</Link>
                        <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>
            <div className="acc-mob">
                <Link to="/Account" className="user-icon">
                    <span>
                        <i className="icon-user" />
                    </span>
                </Link>
            </div>
        </li>
    )
}

export default Account