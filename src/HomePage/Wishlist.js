import React from 'react';
import Footermain from '../Component/Footer/Footermain';
import Header from '../Component/Header/Header';

function Wishlist() {
    return (
        <>
            {/* header start */}
            <Header/>
            {/* header end */}
            {/* wishlist start */}
            <section className="wishlist-page section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="wishlist-area">
                                <div className="wishlist-details">
                                    <div className="wishlist-item">
                                        <span className="wishlist-head">My wishlist:</span>
                                        <span className="wishlist-items">3 item</span>
                                    </div>
                                    <div className="wishlist-all-pro">
                                        <div className="wishlist-pro">
                                            <div className="wishlist-pro-image">
                                                <a href="product.html">
                                                    <img
                                                        src="image/cart-page/cart-1/image1.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="pro-details">
                                                <h4>
                                                    <a href="product.html">Vegetable tomato fresh</a>
                                                </h4>
                                                <span className="all-size">
                                                    Size: <span className="pro-size">5kg</span>
                                                </span>
                                                <span className="wishlist-text">Petro-demo</span>
                                            </div>
                                        </div>
                                        <div className="qty-item">
                                            <a href="cart.html" className="add-wishlist">
                                                Add to cart
                                            </a>
                                            <a href="checkout.html" className="add-wishlist">
                                                Buy now
                                            </a>
                                        </div>
                                        <div className="all-pro-price">
                                            <span className="new-price">$384.51 USD</span>
                                            <span className="old-price">
                                                <del>$405.00 USD</del>
                                            </span>
                                            <span>
                                                <i className="ion-android-close" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wishlist-area">
                                <div className="wishlist-details">
                                    <div className="wishlist-all-pro">
                                        <div className="wishlist-pro">
                                            <div className="wishlist-pro-image">
                                                <a href="product.html">
                                                    <img
                                                        src="image/cart-page/cart-1/image3.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="pro-details">
                                                <h4>
                                                    <a href="product.html">Fresh healthy food</a>
                                                </h4>
                                                <span className="all-size">
                                                    Size: <span className="pro-size">6kg</span>
                                                </span>
                                                <span className="wishlist-text">Multiwebinfo</span>
                                            </div>
                                        </div>
                                        <div className="qty-item">
                                            <a href="cart.html" className="add-wishlist">
                                                Add to cart
                                            </a>
                                            <a href="checkout.html" className="add-wishlist">
                                                Buy now
                                            </a>
                                        </div>
                                        <div className="all-pro-price">
                                            <span className="new-price">$460.00 USD</span>
                                            <span className="old-price">
                                                <del>$400.00 USD</del>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wishlist-area">
                                <div className="wishlist-details">
                                    <div className="wishlist-all-pro">
                                        <div className="wishlist-pro">
                                            <div className="wishlist-pro-image">
                                                <a href="product.html">
                                                    <img
                                                        src="image/cart-page/cart-1/image2.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </a>
                                            </div>
                                            <div className="pro-details">
                                                <h4>
                                                    <a href="product.html">Fresh green orange</a>
                                                </h4>
                                                <span className="all-size">
                                                    Size: <span className="pro-size">3kg</span>
                                                </span>
                                                <span className="wishlist-text">Vegina-store</span>
                                            </div>
                                        </div>
                                        <div className="qty-item">
                                            <a href="cart.html" className="add-wishlist">
                                                Add to cart
                                            </a>
                                            <a href="checkout.html" className="add-wishlist">
                                                Buy now
                                            </a>
                                        </div>
                                        <div className="all-pro-price">
                                            <span className="new-price">$109.20 USD</span>
                                            <span className="old-price">
                                                <del>$99.99 USD</del>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="other-link">
                                        <ul className="c-link">
                                            <li className="wishlist-other-link">
                                                <a href="grid-list.html">Continue shopping</a>
                                            </li>
                                            <li className="wishlist-other-link">
                                                <a href="index.html">Clear wishlist</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* wishlist end */}
            {/* footer start */}
           <Footermain/>
        </>

    )
}

export default Wishlist