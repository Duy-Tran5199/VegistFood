import React from 'react';
import {Link} from 'react-router-dom';

function Category() {
    return (
        <section className="category-img1 section-t-padding section-b-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="section-title">
                            <h2>Shop by category</h2>
                        </div>
                        <div className="home-category owl-carousel owl-theme">
                            <div className="items">
                                <div className="h-cate">
                                    <div className="c-img">
                                        <Link to="/Gridlist" className="home-cate-img">
                                            <img
                                                className="img-fluid"
                                                src="image/category-image/home-1/cat1.jpg"
                                                alt="cate-image"
                                            />
                                            <span className="cat-title">Fresh fruits</span>
                                        </Link>
                                    </div>
                                    <span className="cat-num">19 Items</span>
                                </div>
                            </div>
                            <div className="items">
                                <div className="h-cate">
                                    <div className="c-img">
                                        <Link to="/Gridlist" className="home-cate-img">
                                            <img
                                                className="img-fluid"
                                                src="image/category-image/home-1/cat2.jpg"
                                                alt="cate-image"
                                            />
                                            <span className="cat-title">Dairy &amp; chesse</span>
                                        </Link>
                                    </div>
                                    <span className="cat-num">19 Items</span>
                                </div>
                            </div>
                            <div className="items">
                                <div className="h-cate">
                                    <div className="c-img">
                                        <Link to="/Gridlist" className="home-cate-img">
                                            <img
                                                className="img-fluid"
                                                src="image/category-image/home-1/cat3.jpg"
                                                alt="cate-image"
                                            />
                                            <span className="cat-title">Sea &amp; fish</span>
                                        </Link>
                                    </div>
                                    <span className="cat-num">19 Items</span>
                                </div>
                            </div>
                            <div className="items">
                                <div className="h-cate">
                                    <div className="c-img">
                                        <Link to="/Gridlist" className="home-cate-img">
                                            <img
                                                className="img-fluid"
                                                src="image/category-image/home-1/cat4.jpg"
                                                alt="cate-image"
                                            />
                                            <span className="cat-title">Organic dryfruit</span>
                                        </Link>
                                    </div>
                                    <span className="cat-num">19 Items</span>
                                </div>
                            </div>
                            <div className="items">
                                <div className="h-cate">
                                    <div className="c-img">
                                        <Link to="/Gridlist" className="home-cate-img">
                                            <img
                                                className="img-fluid"
                                                src="image/category-image/home-1/cat5.jpg"
                                                alt="cate-image"
                                            />
                                            <span className="cat-title">Green seafood</span>
                                        </Link>
                                    </div>
                                    <span className="cat-num">19 Items</span>
                                </div>
                            </div>
                            <div className="items">
                                <div className="h-cate">
                                    <div className="c-img">
                                        <Link to="/Gridlist" className="home-cate-img">
                                            <img
                                                className="img-fluid"
                                                src="image/category-image/home-1/cat6.jpg"
                                                alt="cate-image"
                                            />
                                            <span className="cat-title">Organic juice</span>
                                        </Link>
                                    </div>
                                    <span className="cat-num">19 Items</span>
                                </div>
                            </div>
                            <div className="items">
                                <div className="h-cate">
                                    <div className="c-img">
                                        <Link to="/Gridlist" className="home-cate-img">
                                            <img
                                                className="img-fluid"
                                                src="image/category-image/home-1/cat7.jpg"
                                                alt="cate-image"
                                            />
                                            <span className="cat-title">Summer fruit</span>
                                        </Link>
                                    </div>
                                    <span className="cat-num">19 Items</span>
                                </div>
                            </div>
                            <div className="items">
                                <div className="h-cate">
                                    <div className="c-img">
                                        <Link to="/Gridlist" className="home-cate-img">
                                            <img
                                                className="img-fluid"
                                                src="image/category-image/home-1/cat8.jpg"
                                                alt="cate-image"
                                            />
                                            <span className="cat-title">Fresh vegetable</span>
                                        </Link>
                                    </div>
                                    <span className="cat-num">19 Items</span>
                                </div>
                            </div>
                            <div className="items">
                                <div className="h-cate">
                                    <div className="c-img">
                                        <Link to="/Gridlist" className="home-cate-img">
                                            <img
                                                className="img-fluid"
                                                src="image/category-image/home-1/cat9.jpg"
                                                alt="cate-image"
                                            />
                                            <span className="cat-title">Fresh meat</span>
                                        </Link>
                                    </div>
                                    <span className="cat-num">19 Items</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category