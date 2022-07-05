import React from 'react'

function Cartwrap() {
    return (
        <li className="side-wrap cart-wrap">
            <div className="shopping-widget">
                <div className="shopping-cart">
                    <a href="javascript:void(0)" className="cart-count">
                        <span className="cart-icon-wrap">
                            <span className="cart-icon">
                                <i className="icon-handbag" />
                            </span>
                            <span id="cart-total" className="bigcounter">
                                5
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </li>
    )
}

export default Cartwrap