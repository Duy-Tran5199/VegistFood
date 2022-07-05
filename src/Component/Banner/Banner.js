import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
    return (
        <section className="t-banner1 section-tb-padding">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="home-offer-banner">
                            <div className="o-t-banner">
                                <Link to="/Product" className="image-b">
                                    <img
                                        className="img-fluid"
                                        src="image/banner-1.jpg"
                                        alt="banner image"
                                    />
                                </Link>
                                <div className="o-t-content">
                                    <h6>Fresh fruits, vagetable on our product</h6>
                                    <Link to="/Product" className="btn btn-style1">
                                        Shop now
                                    </Link>
                                </div>
                            </div>
                            <div className="o-t-banner">
                                <Link to="/Product" className="image-b">
                                    <img
                                        className="img-fluid"
                                        src="image/banner-2.jpg"
                                        alt="banner image"
                                    />
                                </Link>
                                <div className="o-t-content banner-color">
                                    <h6>Vagetable eggplant 100% fresh food</h6>
                                    <Link to="/Product" className="btn btn-style1">
                                        Shop now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner