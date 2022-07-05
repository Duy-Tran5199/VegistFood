import React from 'react';
import Footermain from '../Component/Footer/Footermain';
import Header from '../Component/Header/Header';
import Quickview from '../Component/Quickview';
import {useEffect} from 'react';

function Product() {
    useEffect(() => {

    },[])
    return (
        <>
            {/* header start */}
            <Header/>
            {/* header end */}
            {/* product info start */}
            <section className="section-tb-padding pro-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 col-lg-12 col-md-12 col-xs-12 pro-image">
                            <div className="row">
                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 larg-image">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="image-11">
                                            <a href="javascript:void(0)" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            "url(image/pro-page-image/pro-page-image.jpg)"
                                                    }}
                                                >
                                                    <img
                                                        src="image/pro-page-image/pro-page-image.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-22">
                                            <a href="javascript:void(0)" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            "url(image/pro-page-image/prro-page-image01.jpg)"
                                                    }}
                                                >
                                                    <img
                                                        src="image/pro-page-image/prro-page-image01.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-33">
                                            <a href="javascript:void(0)" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            "url(image/pro-page-image/pro-page-image1-1.jpg)"
                                                    }}
                                                >
                                                    <img
                                                        src="image/pro-page-image/pro-page-image1-1.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-44">
                                            <a href="javascript:void(0)" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            "url(image/pro-page-image/pro-page-image1.jpg)"
                                                    }}
                                                >
                                                    <img
                                                        src="image/pro-page-image/pro-page-image1.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-55">
                                            <a href="javascript:void(0)" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            "url(image/pro-page-image/pro-page-image2.jpg)"
                                                    }}
                                                >
                                                    <img
                                                        src="image/pro-page-image/pro-page-image2.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-66">
                                            <a href="javascript:void(0)" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            "url(image/pro-page-image/pro-page-image2-2.jpg)"
                                                    }}
                                                >
                                                    <img
                                                        src="image/pro-page-image/pro-page-image2-2.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-77">
                                            <a href="javascript:void(0)" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            "url(image/pro-page-image/pro-page-image3.jpg)"
                                                    }}
                                                >
                                                    <img
                                                        src="image/pro-page-image/pro-page-image3.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                        <div className="tab-pane fade" id="image-88">
                                            <a href="javascript:void(0)" className="long-img">
                                                <figure
                                                    className="zoom"
                                                    onmousemove="zoom(event)"
                                                    style={{
                                                        backgroundImage:
                                                            "url(image/pro-page-image/pro-page-image03.jpg)"
                                                    }}
                                                >
                                                    <img
                                                        src="image/pro-page-image/pro-page-image03.jpg"
                                                        className="img-fluid"
                                                        alt="image"
                                                    />
                                                </figure>
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="nav nav-tabs pro-page-slider owl-carousel owl-theme">
                                        <li className="nav-item items">
                                            <a
                                                className="nav-link active"
                                                data-bs-toggle="tab"
                                                href="#image-11"
                                            >
                                                <img
                                                    src="image/pro-page-image/image1.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-22">
                                                <img
                                                    src="image/pro-page-image/image2.jpg"
                                                    className="img-fluid"
                                                    alt="iamge"
                                                />
                                            </a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-33">
                                                <img
                                                    src="image/pro-page-image/image3.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-44">
                                                <img
                                                    src="image/pro-page-image/image4.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-55">
                                                <img
                                                    src="image/pro-page-image/image5.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-66">
                                                <img
                                                    src="image/pro-page-image/image6.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-77">
                                                <img
                                                    src="image/pro-page-image/image8.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                        <li className="nav-item items">
                                            <a className="nav-link" data-bs-toggle="tab" href="#image-88">
                                                <img
                                                    src="image/pro-page-image/image7.jpg"
                                                    className="img-fluid"
                                                    alt="image"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-xl-6 col-md-6 col-12 col-xs-12 pro-info">
                                    <h4>Fresh green orange</h4>
                                    <div className="rating">
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star d-star" />
                                        <i className="fa fa-star-o" />
                                    </div>
                                    <div className="pro-availabale">
                                        <span className="available">Availability:</span>
                                        <span className="pro-instock">In stock</span>
                                    </div>
                                    <div className="pro-price">
                                        <span className="new-price">$180.00 CAD</span>
                                        <span className="old-price">
                                            <del>$200.00 CAD</del>
                                        </span>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-8%</span>
                                        </div>
                                    </div>
                                    <span className="pro-details">
                                        Hurry up! only <span className="pro-number">7</span> products
                                        left in stock!
                                    </span>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer took a galley
                                        of type and
                                    </p>
                                    <div className="pro-items">
                                        <span className="pro-size">Size:</span>
                                        <ul className="pro-wight">
                                            <li>
                                                <a href="javascript:void(0)" className="active">
                                                    5KG
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">2KG</a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">3KG</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-color">
                                        <span className="color-label">Color:</span>
                                        <span className="color">
                                            <a href="javascript:void(0)" className="active">
                                                <span />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <span />
                                            </a>
                                            <a href="javascript:void(0)">
                                                <span />
                                            </a>
                                        </span>
                                    </div>
                                    <div className="pro-qty">
                                        <span className="qty">Quantity:</span>
                                        <div className="plus-minus">
                                            <span>
                                                <a
                                                    href="javascript:void(0)"
                                                    className="minus-btn text-black"
                                                >
                                                    -
                                                </a>
                                                <input type="text" name="name" defaultValue={1} />
                                                <a
                                                    href="javascript:void(0)"
                                                    className="plus-btn text-black"
                                                >
                                                    +
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="pro-btn">
                                        <a href="wishlist.html" className="btn btn-style1">
                                            <i className="fa fa-heart" />
                                        </a>
                                        <a href="cart.html" className="btn btn-style1">
                                            <i className="fa fa-shopping-bag" /> Add to cart
                                        </a>
                                        <a href="checkout-1.html" className="btn btn-style1">
                                            Buy now
                                        </a>
                                    </div>
                                    <div className="share">
                                        <span className="share-lable">Share:</span>
                                        <ul className="share-icn">
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="fa fa-facebook" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="fa fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="fa fa-instagram" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:void(0)">
                                                    <i className="fa fa-pinterest" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="pay-img">
                                        <a href="checkout-1.html">
                                            <img
                                                src="image/pay-image.jpg"
                                                className="img-fluid"
                                                alt="pay-image"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-12 col-md-12 col-xs-12 pro-shipping">
                            <div className="product-service">
                                <div className="icon-title">
                                    <span>
                                        <i className="ti-truck" />
                                    </span>
                                    <h4>Delivery info</h4>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    the printing and typesetting industry.
                                </p>
                            </div>
                            <div className="product-service">
                                <div className="icon-title">
                                    <span>
                                        <i className="ti-reload" />
                                    </span>
                                    <h4>30 days returns</h4>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    the printing and typesetting industry.
                                </p>
                            </div>
                            <div className="product-service">
                                <div className="icon-title">
                                    <span>
                                        <i className="ti-id-badge" />
                                    </span>
                                    <h4>10 year warranty</h4>
                                </div>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    the printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* product info end */}
            {/* product page tab start */}
            <section className="section-b-padding pro-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="pro-page-tab">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            href="#tab-1"
                                        >
                                            Description
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                                            Reviews
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                                            Video
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">
                                            Size chart
                                        </a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tab-1">
                                        <div className="tab-1content">
                                            <h4>More details</h4>
                                            <ul className="tab-description">
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry
                                                </li>
                                                <li>
                                                    Lorem Ipsum has been the ‘s standard dummy text. Lorem
                                                    Ipsumum is simply dummy text.
                                                </li>
                                                <li>type here your detail one by one li more add</li>
                                                <li>
                                                    has been the industry’s standard dummy text ever since.
                                                    Lorem Ips
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry.
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the ‘s standard
                                                    dummy text. Lorem Ipsum has been the industry’s standard
                                                    dummy text ever since. Lorem Ipsum is simply dummy text.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tab-2content">
                                            <h4>Key specification</h4>
                                            <ul className="tab-description">
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry
                                                </li>
                                                <li>
                                                    Lorem Ipsum has been the ‘s standard dummy text. Lorem
                                                    Ipsumum is simply dummy text.
                                                </li>
                                                <li>type here your detail one by one li more add</li>
                                                <li>
                                                    has been the industry’s standard dummy text ever since.
                                                    Lorem Ips
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry.
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the ‘s standard
                                                    dummy text. Lorem Ipsum has been the industry’s standard
                                                    dummy text ever since. Lorem Ipsum is simply dummy text.
                                                </li>
                                                <li>
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the ‘s standard
                                                    dummy text. Lorem Ipsum has been the industry’s standard
                                                    dummy text ever since. Lorem Ipsum is simply dummy text.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show" id="tab-2">
                                        <h4 className="reviews-title">Customer reviews</h4>
                                        <div className="customer-reviews t-desk-2">
                                            <span className="p-rating">
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                            </span>
                                            <p className="review-desck">Based on 2 reviews</p>
                                            <a href="#add-review" data-bs-toggle="collapse">
                                                Write a review
                                            </a>
                                        </div>
                                        <div className="review-form collapse" id="add-review">
                                            <h4>Write a review</h4>
                                            <form>
                                                <label>Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter your name"
                                                />
                                                <label>Email</label>
                                                <input
                                                    type="text"
                                                    name="mail"
                                                    placeholder="Enter your Email"
                                                />
                                                <label>Rating</label>
                                                <span>
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                    <i className="fa fa-star" />
                                                </span>
                                                <label>Review title</label>
                                                <input type="text" name="mail" placeholder="Review title" />
                                                <label>Add comments</label>
                                                <textarea
                                                    name="comment"
                                                    placeholder="Write your comments"
                                                    defaultValue={""}
                                                />
                                            </form>
                                        </div>
                                        <div className="customer-reviews">
                                            <span className="p-rating">
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star-o" />
                                            </span>
                                            <h4 className="review-head">
                                                he also good and high product see like look
                                            </h4>
                                            <span className="reviews-editor">
                                                kelin patel <span className="review-name">on</span> fab 5,
                                                2021
                                            </span>
                                            <p className="r-description">
                                                he also good and high product see like look
                                            </p>
                                        </div>
                                        <div className="customer-reviews">
                                            <span className="p-rating">
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star e-star" />
                                                <i className="fa fa-star-o" />
                                                <i className="fa fa-star-o" />
                                            </span>
                                            <h4 className="review-head">
                                                he also good and fresh fruit organic product see like look
                                            </h4>
                                            <span className="reviews-editor">
                                                Melvin louis <span className="review-name">on</span> fab 5,
                                                2021
                                            </span>
                                            <p className="r-description">
                                                he also good and fresh fruit organic product see like look
                                            </p>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show" id="tab-3">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe
                                                height={630}
                                                src="https://www.youtube.com/embed/0etCKCAsImI"
                                                title="YouTube video player"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen=""
                                            />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade show" id="tab-5">
                                        <div className="more-description table-responsive">
                                            <table
                                                className="table table-bordered table-elastic table-condensed"
                                                style={{ fontSize: 9 }}
                                            >
                                                <thead>
                                                    <tr className="top">
                                                        <th rowSpan={2} scope="col">
                                                            Vegetables
                                                            <br /> Serving Size
                                                            <br /> (gram weight/
                                                            <br /> ounce weight)
                                                        </th>
                                                        <th rowSpan={2} scope="col">
                                                            Calories
                                                        </th>
                                                        <th rowSpan={2} scope="col">
                                                            Calories
                                                            <br /> from Fat
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Total Fat
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Sodium
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Potassium
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Total
                                                            <br /> Carbo-hydrate
                                                        </th>
                                                        <th colSpan={2} scope="col">
                                                            Dietary
                                                            <br /> Fiber
                                                        </th>
                                                        <th scope="col">Sugars</th>
                                                        <th scope="col">Protein</th>
                                                        <th scope="col">Vitamin A</th>
                                                        <th scope="col">Vitamin C</th>
                                                        <th scope="col">Calcium</th>
                                                        <th scope="col">Iron</th>
                                                    </tr>
                                                    <tr className="text-center" style={{ fontSize: "90%" }}>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(mg)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(mg)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(g)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(%DV)</th>
                                                        <th scope="col">(%DV)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Asparagus
                                                            <br /> 5 spears
                                                            <br /> (93 g/3.3 oz)
                                                        </th>
                                                        <td>20</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>230</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>10</td>
                                                        <td>15</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Bell Pepper
                                                            <br /> 1 medium
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>25</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>40</td>
                                                        <td>2</td>
                                                        <td>220</td>
                                                        <td>6</td>
                                                        <td>6</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>190</td>
                                                        <td>2</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Broccoli
                                                            <br /> 1 medium stalk
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>45</td>
                                                        <td>0</td>
                                                        <td>0.5</td>
                                                        <td>1</td>
                                                        <td>80</td>
                                                        <td>3</td>
                                                        <td>460</td>
                                                        <td>13</td>
                                                        <td>8</td>
                                                        <td>3</td>
                                                        <td>3</td>
                                                        <td>12</td>
                                                        <td>2</td>
                                                        <td>4</td>
                                                        <td>6</td>
                                                        <td>220</td>
                                                        <td>6</td>
                                                        <td>6</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Carrot
                                                            <br /> 1 carrot, 7" long,
                                                            <br /> 1 1/4" diameter
                                                            <br />
                                                            (78 g/2.8 oz)
                                                        </th>
                                                        <td>30</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>60</td>
                                                        <td>3</td>
                                                        <td>250</td>
                                                        <td>7</td>
                                                        <td>7</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>5</td>
                                                        <td>1</td>
                                                        <td>110</td>
                                                        <td>10</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Cauliflower
                                                            <br /> 1/6 medium head
                                                            <br /> (99 g/3.5 oz)
                                                        </th>
                                                        <td>25</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>30</td>
                                                        <td>1</td>
                                                        <td>270</td>
                                                        <td>8</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>0</td>
                                                        <td>100</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Celery
                                                            <br /> 2 medium stalks
                                                            <br /> (110 g/3.9 oz)
                                                        </th>
                                                        <td>15</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>115</td>
                                                        <td>5</td>
                                                        <td>260</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>0</td>
                                                        <td>10</td>
                                                        <td>15</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Cucumber
                                                            <br /> 1/3 medium
                                                            <br /> (99 g/3.5 oz)
                                                        </th>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>140</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>10</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Green (Snap) Beans
                                                            <br /> 3/4 cup cut
                                                            <br /> (83 g/3.0 oz)
                                                        </th>
                                                        <td>20</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>200</td>
                                                        <td>6</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>3</td>
                                                        <td>12</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>10</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Green&nbsp;Cabbage
                                                            <br /> 1/12 medium head
                                                            <br /> (84 g/3.0 oz)
                                                        </th>
                                                        <td>25</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>20</td>
                                                        <td>1</td>
                                                        <td>190</td>
                                                        <td>5</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>0</td>
                                                        <td>70</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Green Onion
                                                            <br /> 1/4 cup chopped
                                                            <br /> (25 g/0.9 oz)
                                                        </th>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>70</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>0</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Iceberg Lettuce
                                                            <br /> 1/6 medium head
                                                            <br /> (89 g/3.2 oz)
                                                        </th>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>125</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>6</td>
                                                        <td>6</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Leaf Lettuce
                                                            <br /> 1 1/2 cups shredded
                                                            <br /> (85 g/3.0 oz)
                                                        </th>
                                                        <td>15</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>35</td>
                                                        <td>1</td>
                                                        <td>170</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>130</td>
                                                        <td>6</td>
                                                        <td>2</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Mushrooms
                                                            <br /> 5 medium
                                                            <br /> (84 g/3.0 oz)
                                                        </th>
                                                        <td>20</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>15</td>
                                                        <td>0</td>
                                                        <td>300</td>
                                                        <td>9</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>0</td>
                                                        <td>3</td>
                                                        <td>0</td>
                                                        <td>2</td>
                                                        <td>0</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Onion
                                                            <br /> 1 medium
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>45</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>5</td>
                                                        <td>0</td>
                                                        <td>190</td>
                                                        <td>5</td>
                                                        <td>11</td>
                                                        <td>4</td>
                                                        <td>3</td>
                                                        <td>12</td>
                                                        <td>9</td>
                                                        <td>1</td>
                                                        <td>0</td>
                                                        <td>20</td>
                                                        <td>4</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Potato
                                                            <br /> 1 medium
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>110</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>620</td>
                                                        <td>18</td>
                                                        <td>26</td>
                                                        <td>9</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>1</td>
                                                        <td>3</td>
                                                        <td>0</td>
                                                        <td>45</td>
                                                        <td>2</td>
                                                        <td>6</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Radishes
                                                            <br /> 7 radishes
                                                            <br /> (85 g/3.0 oz)
                                                        </th>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>55</td>
                                                        <td>2</td>
                                                        <td>190</td>
                                                        <td>5</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>30</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Summer Squash
                                                            <br /> 1/2 medium
                                                            <br /> (98 g/3.5 oz)
                                                        </th>
                                                        <td>20</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>260</td>
                                                        <td>7</td>
                                                        <td>4</td>
                                                        <td>1</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>6</td>
                                                        <td>30</td>
                                                        <td>2</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Sweet Corn
                                                            <br /> kernels from 1<br /> medium ear
                                                            <br /> (90 g/3.2 oz)
                                                        </th>
                                                        <td>90</td>
                                                        <td>20</td>
                                                        <td>2.5</td>
                                                        <td>4</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>250</td>
                                                        <td>7</td>
                                                        <td>18</td>
                                                        <td>6</td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td>5</td>
                                                        <td>4</td>
                                                        <td>2</td>
                                                        <td>10</td>
                                                        <td>0</td>
                                                        <td>2</td>
                                                    </tr>
                                                    <tr className="alert alert-warning">
                                                        <th scope="row">
                                                            Sweet Potato
                                                            <br /> 1 medium, 5" long,
                                                            <br /> 2" diameter
                                                            <br />
                                                            (130 g/4.6 oz)
                                                        </th>
                                                        <td>100</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>70</td>
                                                        <td>3</td>
                                                        <td>440</td>
                                                        <td>13</td>
                                                        <td>23</td>
                                                        <td>8</td>
                                                        <td>4</td>
                                                        <td>16</td>
                                                        <td>7</td>
                                                        <td>2</td>
                                                        <td>120</td>
                                                        <td>30</td>
                                                        <td>4</td>
                                                        <td>4</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            Tomato
                                                            <br /> 1 medium
                                                            <br /> (148 g/5.3 oz)
                                                        </th>
                                                        <td>25</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>0</td>
                                                        <td>20</td>
                                                        <td>1</td>
                                                        <td>340</td>
                                                        <td>10</td>
                                                        <td>5</td>
                                                        <td>2</td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td>3</td>
                                                        <td>1</td>
                                                        <td>20</td>
                                                        <td>40</td>
                                                        <td>2</td>
                                                        <td>4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* product page tab end */}
            {/* releted product start */}
            <section className="section-b-padding pro-releted">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section-title">
                                <h2>Related Products</h2>
                            </div>
                            <div className="releted-products owl-carousel owl-theme">
                                <div className="items">
                                    <div className="tred-pro">
                                        <div className="tr-pro-img">
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Fresh organic fruit (50gm)</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Fresh &amp; healty food</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-20%</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Fresh apple</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Fresh litchi 100% organic</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-12%</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Vegetable tomato fresh</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-21%</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Natural grassbean</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-10%</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Fresh dryed almod (50gm)</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Orange juice (5ltr)</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-12%</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Organic coconet (5ltr) juice</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Shrimp jumbo (5Lb)</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-text">New</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Sp.red fresh guava</a>
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
                                            <a href="product.html">
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
                                            </a>
                                        </div>
                                        <div className="Pro-lable">
                                            <span className="p-discount">-25%</span>
                                        </div>
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
                                    <div className="caption">
                                        <h3>
                                            <a href="product.html">Fresh mussel (500g)</a>
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
            {/* releted product end */}
            {/* quick veiw start */}
            <Quickview/>
            {/* quick veiw end */}
            {/* footer start */}
           <Footermain/>
        </>

    )
}

export default Product