import React from 'react'
import Footermain from '../Component/Footer/Footermain'
import Header from '../Component/Header/Header'
import Quickview from '../Component/Quickview'

function Search() {
    return (
        <>
            {/* header start */}
            <Header/>
            {/* header end */}
            {/* search page start */}
            <section className="section-tb-padding">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="search-title">
                                <h3>Your search for "a" revealed the following:</h3>
                            </div>
                            <div className="saerch-input">
                                <form>
                                    <input type="text" name="search" placeholder="Search our store" />
                                    <a href="search.html" className="search-btn">
                                        <i className="fa fa-search" />
                                    </a>
                                </form>
                            </div>
                            <div className="search-pro-area">
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/17.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/pro-img-03.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">Fresh apple (5kg)</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$130.00 USD</span>
                                            <span className="search-old-price">
                                                <del>150.00 USD</del>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/14.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/14.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">American mayonise pizza</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$117.00 USD</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/18.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/pro-img-7.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">Fresh dryed almod (50g)</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$580.00 USD</span>
                                            <span className="search-old-price">
                                                <del>590.00 USD</del>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/2.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/2.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">Chilly garlic bread</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$133.00 USD</span>
                                            <span className="search-old-price">
                                                <del>145.00 USD</del>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/15.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/15.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">Breakfast eggplant special</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$580.00 USD</span>
                                            <span className="search-old-price">
                                                <del>590.00 USD</del>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/7.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/7.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">Kathiyavadi Gujarati sandvich</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$230.00 USD</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/3.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/3.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">South indian palakpaner</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$139.00 USD</span>
                                            <span className="search-old-price">
                                                <del>160.00 USD</del>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/9.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/9.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">South indian palakpaner</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$117.00 USD</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/16.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/16.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">Canadian chezze salad</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$130.00 USD</span>
                                            <span className="search-old-price">
                                                <del>150.00 USD</del>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/4.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/4.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">Delicius chiken hotdogs</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$580.00 USD</span>
                                            <span className="search-old-price">
                                                <del>590.00 USD</del>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/10.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/10.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">Special corn noodels</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$133.00 USD</span>
                                            <span className="search-old-price">
                                                <del>145.00 USD</del>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="search-pro-items">
                                    <div className="search-img">
                                        <a href="product.html">
                                            <img
                                                src="image/search-image/11.jpg"
                                                className="img-fluid"
                                                alt="image"
                                            />
                                            <img
                                                src="image/search-image/hover/11.jpg"
                                                className="img-fluid search-hover"
                                                alt="image"
                                            />
                                        </a>
                                        <div className="pro-icn">
                                            <a href="wishlist.html" className="w-c-q-icn">
                                                <i className="fa fa-heart" />
                                            </a>
                                            <a href="cart.html" className="w-c-q-icn">
                                                <i className="fa fa-shopping-bag" />
                                            </a>
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
                                    <div className="search-caption">
                                        <h4>
                                            <a href="product.html">Special egypt pasta</a>
                                        </h4>
                                        <span className="all-price">
                                            <span className="search-new-price">$139.00 USD</span>
                                            <span className="search-old-price">
                                                <del>160.00 USD</del>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="all-page">
                                <div className="page-number style-1">
                                    <a href="javascript:void(0)" className="active">
                                        1
                                    </a>
                                    <a href="search-2.html">2</a>
                                    <a href="search-2.html">
                                        <i className="fa fa-angle-double-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* search page end */}
            {/* quick veiw start */}
            <Quickview/>
            {/* quick veiw end */}
            {/* footer start */}
           <Footermain/>
        </>

    )
}

export default Search;