import React from 'react'
import {Link} from 'react-router-dom'
import AccountOptions from "./AccountOptions";
import Searchbar from "./Searchbar";

const Navigation = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <Link className="navbar-brand ps-3" to="/">
                    <i className="d-inline-block align-top fa-solid fa-books"/>
                    BookReview
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Searchbar />
                    <AccountOptions />
                </div>

            </nav>
        </div>

    );
}

export default Navigation;