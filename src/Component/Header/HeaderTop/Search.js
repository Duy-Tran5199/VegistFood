import React from 'react'
import { Link } from 'react-router-dom'

function Search() {
    return (
        <div className="header-element search-wrap">
            <input
                type="text"
                name="search"
                placeholder="Search product."
            />
            <Link to="/Search" className="search-btn">
                <i className="fa fa-search" />
            </Link>
        </div>
    )
}

export default Search