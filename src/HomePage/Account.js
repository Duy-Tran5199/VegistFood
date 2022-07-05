import React from 'react'
import Footermain from '../Component/Footer/Footermain';
import Header from '../Component/Header/Header';
import { useSate } from 'react';

function Account() {

    return (
        <>
            {/* header start */}
            <Header/>
            {/* header end */}
            {/* faq's collapse start */}
            <section className="shipping-area section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="account-title">
                                <h1>Welcome Vegist</h1>
                            </div>
                            <div className="account-area">
                                <div className="account">
                                    <h4>My account</h4>
                                    <ul className="page-name">
                                        <li className="register-id">
                                            <a href="wishlist.html">Wishlist(0)</a>
                                        </li>
                                        <li className="register-id">
                                            <a href="login.html">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="account-detail">
                                    <h4>Account details</h4>
                                    <ul className="a-details">
                                        <li>Andrew louise</li>
                                        <li className="mail-register">andrew@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="order-details">
                                <h4>Order history</h4>
                                <p>You haven't placed any orders yet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* faq's collapse end */}
            {/* footer start */}
            <Footermain/>
        </>

    )
}

export default Account