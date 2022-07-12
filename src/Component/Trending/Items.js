import React from 'react'
import { Link } from 'react-router-dom'
import Products from '../api/products';


const Items = (props) => {
    let {product,index} = props;
    return (
        <div>
            <div>
                <div>
                    <div className="items">
                        <div className="tred-pro">
                            <div className="tr-pro-img">
                                <Link to="/Product">
                                    <img
                                        className="img-fluid"
                                        src={`${Products.image}`}
                                        alt="pro-img1"
                                    />
                                    <img
                                        className="img-fluid additional-image"
                                        src={`${Products.image2}`}
                                        alt="additional image"
                                    />
                                </Link>
                            </div>
                            <div className="Pro-lable">
                                <span className="p-text">New</span>
                            </div>
                            <div className="pro-icn">
                                <Link to="/Wishlist" className="w-c-q-icn">
                                    <i className="fa fa-heart" />
                                </Link>
                                <Link to="/Cart" className="w-c-q-icn">
                                    <i className="fa fa-shopping-bag" />
                                </Link>
                                <a
                                    href="javascript:void(0)"
                                    className="w-c-q-icn"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    <i className="fa fa-eye" />
                                </a>
                            </div>
                        </div>
                        <div className="caption">
                            <h3>
                                <Link to="/Product">{`${product.Title}`}</Link>
                            </h3>
                            <div className="rating">
                                <i className="fa fa-star e-star" />
                                <i className="fa fa-star e-star" />
                                <i className="fa fa-star e-star" />
                                <i className="fa fa-star e-star" />
                                <i className="fa fa-star e-star" />
                            </div>
                            <div className="pro-price">
                                <span className="new-price">{`${product.price}`}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items