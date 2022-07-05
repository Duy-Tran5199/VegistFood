import React from 'react';
import { Link } from 'react-router-dom';

function MiniCart() {
    return (
        <div className="mini-cart">
            <a href="javascript:void(0)" className="shopping-cart-close">
                <i className="ion-close-round" />
            </a>
            <div className="cart-item-title">
                <p>
                    <span className="cart-count-desc">There are</span>
                    <span className="cart-count-item bigcounter">4</span>
                    <span className="cart-count-desc">Products</span>
                </p>
            </div>
            <ul className="cart-item-loop">
                <li className="cart-item">
                    <div className="cart-img">
                        <Link to="/Product">
                            <img
                                src="image/cart-img.jpg"
                                alt="cart-image"
                                className="img-fluid"
                            />
                        </Link>
                    </div>
                    <div className="cart-title">
                        <h6>
                            <Link to="/Product">Fresh apple 5kg</Link>
                        </h6>
                        <div className="cart-pro-info">
                            <div className="cart-qty-price">
                                <span className="quantity">1 x </span>
                                <span className="price-box">$250.00 USD</span>
                            </div>
                            <div className="delete-item-cart">
                                <Link to="empty-cart.html">
                                    <i className="icon-trash icons" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cart-item">
                    <div className="cart-img">
                        <a href="product.html">
                            <img
                                src="image/cart-img02.jpg"
                                alt="cart-image"
                                className="img-fluid"
                            />
                        </a>
                    </div>
                    <div className="cart-title">
                        <h6>
                            <a href="product.html">Natural grassbean 4kg</a>
                        </h6>
                        <div className="cart-pro-info">
                            <div className="cart-qty-price">
                                <span className="quantity">1 x </span>
                                <span className="price-box">$300.00 USD</span>
                            </div>
                            <div className="delete-item-cart">
                                <a href="empty-cart.html">
                                    <i className="icon-trash icons" />
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cart-item">
                    <div className="cart-img">
                        <a href="product.html">
                            <img
                                src="image/cart-img03.jpg"
                                alt="cart-image"
                                className="img-fluid"
                            />
                        </a>
                    </div>
                    <div className="cart-title">
                        <h6>
                            <a href="product.html">Organic coconut juice 5ltr</a>
                        </h6>
                        <div className="cart-pro-info">
                            <div className="cart-qty-price">
                                <span className="quantity">1 x </span>
                                <span className="price-box">$250.00 USD</span>
                            </div>
                            <div className="delete-item-cart">
                                <a href="empty-cart.html">
                                    <i className="icon-trash icons" />
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="cart-item">
                    <div className="cart-img">
                        <a href="product.html">
                            <img
                                src="image/cart-img04.jpg"
                                alt="cart-image"
                                className="img-fluid"
                            />
                        </a>
                    </div>
                    <div className="cart-title">
                        <h6>
                            <a href="product.html">Orange juice 5ltr</a>
                        </h6>
                        <div className="cart-pro-info">
                            <div className="cart-qty-price">
                                <span className="quantity">1 x </span>
                                <span className="price-box">$350.00 USD</span>
                            </div>
                            <div className="delete-item-cart">
                                <a href="empty-cart.html">
                                    <i className="icon-trash icons" />
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul className="subtotal-title-area">
                <li className="subtotal-info">
                    <div className="subtotal-titles">
                        <h6>Sub total:</h6>
                        <span className="subtotal-price">$750.00 USD</span>
                    </div>
                </li>
                <li className="mini-cart-btns">
                    <div className="cart-btns">
                        <Link to="/Cart" className="btn btn-style2">
                            View cart
                        </Link>
                        <Link to="/CheckOut" className="btn btn-style2">
                            checkout
                        </Link>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MiniCart