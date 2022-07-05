import React from 'react'
import { Link } from 'react-router-dom'

function Trending() {
    return (
        <section className="h-t-products1 section-t-padding section-b-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section-title">
                            <h2>Trending products</h2>
                        </div>
                        <div className="trending-products owl-carousel owl-theme">
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-1.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-01.jpg"
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
                                        <Link to="/cart" className="w-c-q-icn">
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
                                        <Link to="/Product">Fresh organic fruit (50gm)</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$130.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-2.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-02.jpg"
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
                                        <Link to="/Product">Fresh &amp; healty food</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$126.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-3.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-03.jpg"
                                                alt="additional image"
                                            />
                                        </Link>
                                    </div>
                                    <div className="Pro-lable">
                                        <span className="p-discount">-20%</span>
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
                                        <Link to="/Product">Fresh apple</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$130.00 USD</span>
                                        <span className="old-price">
                                            <del>$150.00 USD</del>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-4.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-04.jpg"
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
                                        <Link to="/Product">Fresh litchi 100% organic</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$117.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-5.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-05.jpg"
                                                alt="additional image"
                                            />
                                        </Link>
                                    </div>
                                    <div className="Pro-lable">
                                        <span className="p-discount">-12%</span>
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
                                        <Link to="/Product">Vegetable tomato fresh</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star b-star" />
                                        <i className="fa fa-star b-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$133.00 USD</span>
                                        <span className="old-price">
                                            <del>$145.00 USD</del>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-6.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-06.jpg"
                                                alt="additional image"
                                            />
                                        </Link>
                                    </div>
                                    <div className="Pro-lable">
                                        <span className="p-discount">-21%</span>
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
                                        <Link to="/Product">Natural grassbean</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$139.00 USD</span>
                                        <span className="old-price">
                                            <del>$160.00 USD</del>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-7.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-07.jpg"
                                                alt="additional image"
                                            />
                                        </Link>
                                    </div>
                                    <div className="Pro-lable">
                                        <span className="p-discount">-10%</span>
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
                                        <Link to="/Product">Fresh dryed almod (50gm)</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                        <i className="fa fa-star e-star" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$580.00 USD</span>
                                        <span className="old-price">
                                            <del>$590.00 USD</del>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-8.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-08.jpg"
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
                                        <Link to="/Product">Orange juice (5ltr)</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star b-star" />
                                        <i className="fa fa-star b-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$93.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-9.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-09.jpg"
                                                alt="additional image"
                                            />
                                        </Link>
                                    </div>
                                    <div className="Pro-lable">
                                        <span className="p-discount">-12%</span>
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
                                        <Link to="/Product">Organic coconet (5ltr) juice</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$167.00 USD</span>
                                        <span className="old-price">
                                            <del>$179.00 USD</del>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-10.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-010.jpg"
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
                                        <Link to="/Product">Shrimp jumbo (5Lb)</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star c-star" />
                                        <i className="fa fa-star-o" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$230.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-11.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-011.jpg"
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
                                        <Link to="/Product">Sp.red fresh guava</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$45.00 USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="items">
                                <div className="tred-pro">
                                    <div className="tr-pro-img">
                                        <Link to="/Product">
                                            <img
                                                className="img-fluid"
                                                src="image/pro/pro-img-12.jpg"
                                                alt="pro-img1"
                                            />
                                            <img
                                                className="img-fluid additional-image"
                                                src="image/pro/pro-img-012.jpg"
                                                alt="additional image"
                                            />
                                        </Link>
                                    </div>
                                    <div className="Pro-lable">
                                        <span className="p-discount">-25%</span>
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
                                        <Link to="/Product">Fresh mussel (500g)</Link>
                                    </h3>
                                    <div className="rating">
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$245.00 USD</span>
                                        <span className="old-price">
                                            <del>$270.00 USD</del>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending