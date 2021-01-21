import React from 'react'
import './style.css'

const Search = () => {
    return (
        <div className="searchContainer">
            <header className="searchHeader">Book Search</header>

            <div className="input-group searchBar">
                <div className="form-outline">
                    <input type="search" id="form1" className="form-control" placeholder="Search"/>
                    {/* <label className="form-label" for="form1">Search</label> */}
                </div>
                <button type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Search
