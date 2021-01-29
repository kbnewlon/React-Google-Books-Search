import React from 'react'
import './style.css'

const SearchBar = () => {
    return (
        <div className="searchContainer">
            <header className="searchHeader">Book Search</header>
            <div className="form-group searchBar">
                    <input type="text"
                    className="input-control"
                    placeholder="Search"
                    autoComplete="off"/>
                <button type="submit" className="btn btn-dark">Search</button>
            </div>
        </div>
    )
}

export default SearchBar
