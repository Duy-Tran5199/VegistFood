import React from 'react';
import Footermain from '../Component/Footer/Footermain';
import Header from '../Component/Header/Header';

function Blog() {
    return (
        <>
            {/* header start */}
            <Header />
            {/* header end */}
            {/* left blog start */}
            <section className="section-tb-padding blog-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-5 col-12">
                            <div className="left-column style-1">
                                <div className="blog-search">
                                    <h4>Search</h4>
                                    <form>
                                        <input type="text" name="search" placeholder="Search blog" />
                                        <a href="javascript:void(0)">
                                            <i className="fa fa-search" />
                                        </a>
                                    </form>
                                </div>
                                <div className="right-area style-1">
                                    <div className="right-column-start">
                                        <h4>Archive</h4>
                                        <div className="archive-link">
                                            <h5>February 2021</h5>
                                            <ul>
                                                <li>
                                                    <a href="blog-style-1-3-grid.html">
                                                        <i className="ti-arrow-right" /> Green onion knife and
                                                        salad placed
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-style-1-3-grid.html">
                                                        <i className="ti-arrow-right" /> Health and skin for
                                                        your organic
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-style-1-3-grid.html">
                                                        <i className="ti-arrow-right" /> Health and skin for
                                                        your organic
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-style-1-3-grid.html">
                                                        <i className="ti-arrow-right" /> Fresh organics brand
                                                        and picnic
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-style-1-3-grid.html">
                                                        <i className="ti-arrow-right" /> Organic mix masala
                                                        fresh &amp; soft
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="blog-style-1-3-grid.html">
                                                        <i className="ti-arrow-right" /> Vegist special liquide
                                                        fresh vegetable
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-title">
                                    <h4>Recent post</h4>
                                </div>
                                <div className="left-blog">
                                    <div className="blog-item">
                                        <div className="l-blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-page-1/home-1/image1.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="l-blog-caption">
                                            <span className="date">Fab 3, 2021</span>
                                            <h4>
                                                <a href="blog-style-1-details.html">Organics mix...</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="l-blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-page-1/home-1/image2.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="l-blog-caption">
                                            <span className="date">Fab 3, 2021</span>
                                            <h4>
                                                <a href="blog-style-1-details.html">All time fres...</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="l-blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-page-1/home-1/image3.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="l-blog-caption">
                                            <span className="date">Fab 3, 2021</span>
                                            <h4>
                                                <a href="blog-style-1-details.html">Health and ski...</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="l-blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-page-1/home-1/image4.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="l-blog-caption">
                                            <span className="date">Fab 3, 2021</span>
                                            <h4>
                                                <a href="blog-style-1-details.html">Health and ski...</a>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="blog-item">
                                        <div className="l-blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-page-1/home-1/image5.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                        <div className="l-blog-caption">
                                            <span className="date">Fab 3, 2021</span>
                                            <h4>
                                                <a href="blog-style-1-details.html">Green onion k...</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-tag style-1">
                                    <h4>Tags</h4>
                                    <ul className="tegs">
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Freshmeat</a>
                                        </li>
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Garlic</a>
                                        </li>
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Green</a>
                                        </li>
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Haldi</a>
                                        </li>
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Indian</a>
                                        </li>
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Masala</a>
                                        </li>
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Organic</a>
                                        </li>
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Paper</a>
                                        </li>
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Tost</a>
                                        </li>
                                        <li className="tags-link">
                                            <a href="blog-style-1-3-grid.html">Vegetable</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 col-md-7 col-12">
                            <div className="blog-style-1-left-grid">
                                <div className="blog-start">
                                    <div className="blog-post">
                                        <div className="blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-image/blog-1.jpg"
                                                    alt="blog-image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="blog-style-1-details.html">
                                                        Green onion knife and salad plased
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                                                the...
                                            </p>
                                            <a href="blog-style-1-details.html" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">3 Jan 2021</span>
                                                <a href="javascript:void(0)">6 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-start">
                                    <div className="blog-post">
                                        <div className="blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-image/blog-2.jpg"
                                                    alt="blog-image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="blog-style-1-details.html">
                                                        All time fresh every time healthy
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                                                the...
                                            </p>
                                            <a href="blog-style-1-details.html" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">5 Jan 2021</span>
                                                <a href="javascript:void(0)">0 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-start">
                                    <div className="blog-post">
                                        <div className="blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-image/blog-3.jpg"
                                                    alt="blog-image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="blog-style-1-details.html">
                                                        Vegist special liquide fresh vagi
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                                                the...
                                            </p>
                                            <a href="blog-style-1-details.html" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">7 Jan 2021</span>
                                                <a href="javascript:void(0)">0 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-start">
                                    <div className="blog-post">
                                        <div className="blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-image/blog-4.jpg"
                                                    alt="blog-image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="blog-style-1-details.html">
                                                        Organic mix masala fresh &amp; soft
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                                                the...
                                            </p>
                                            <a href="blog-style-1-details.html" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">9 Jan 2021</span>
                                                <a href="javascript:void(0)">1 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-start">
                                    <div className="blog-post">
                                        <div className="blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-image/blog-5.jpg"
                                                    alt="blog-image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="blog-style-1-details.html">
                                                        Fresh organics brand and picnic
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                                                the...
                                            </p>
                                            <a href="blog-style-1-details.html" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">10 Jan 2021</span>
                                                <a href="javascript:void(0)">1 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-start">
                                    <div className="blog-post">
                                        <div className="blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-image/blog-6.jpg"
                                                    alt="blog-image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="blog-style-1-details.html">
                                                        Health and skin for your organic
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                                                the...
                                            </p>
                                            <a href="blog-style-1-details.html" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">12 Jan 2021</span>
                                                <a href="javascript:void(0)">3 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-start">
                                    <div className="blog-post">
                                        <div className="blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-image/blog-7.jpg"
                                                    alt="blog-image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="blog-style-1-details.html">
                                                        Vegist special liquide fresh vegetable
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                                                the...
                                            </p>
                                            <a href="blog-style-1-details.html" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">15 Jan 2021</span>
                                                <a href="javascript:void(0)">4 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-start">
                                    <div className="blog-post">
                                        <div className="blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-image/blog-1.jpg"
                                                    alt="blog-image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="blog-style-1-details.html">
                                                        Green onion knife and salad plased
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                                                the...
                                            </p>
                                            <a href="blog-style-1-details.html" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">19 Jan 2021</span>
                                                <a href="javascript:void(0)">6 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-start">
                                    <div className="blog-post">
                                        <div className="blog-image">
                                            <a href="blog-style-1-details.html">
                                                <img
                                                    src="image/blog-image/blog-2.jpg"
                                                    alt="blog-image"
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-title">
                                                <h6>
                                                    <a href="blog-style-1-details.html">
                                                        Fresh organics brand and picnic
                                                    </a>
                                                </h6>
                                                <span className="blog-admin">
                                                    By <span className="blog-editor">Andrew louise</span>
                                                </span>
                                            </div>
                                            <p className="blog-description">
                                                What is Lorem Ipsum Lorem Ipsum is simply dummy text of
                                                the...
                                            </p>
                                            <a href="blog-style-1-details.html" className="read-link">
                                                <span>Read more</span>
                                                <i className="ti-arrow-right" />
                                            </a>
                                            <div className="blog-date-comment">
                                                <span className="blog-date">20 Jan 2021</span>
                                                <a href="javascript:void(0)">0 Comment</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="all-page">
                        <span className="page-title">Showing 1 - 5 of 6 result</span>
                        <div className="page-number style-1">
                            <a href="javascript:void(0)" className="active">
                                1
                            </a>
                            <a href="javascript:void(0)">2</a>
                            <a href="javascript:void(0)">3</a>
                            <a href="javascript:void(0)">4</a>
                            <a href="javascript:void(0)">5</a>
                            <a href="javascript:void(0)">
                                <i className="fa fa-angle-double-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* blog end */}
            {/* footer start */}
            <Footermain />
        </>

    )
}

export default Blog