import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router";
import AccountOptions from "./AccountOptions";

const Navigation = () => {
    const navigate = useNavigate();
    const [searchKeys, setSearchKeys] = useState("")
    const checkForSearch = (e) => {
        if (e.key === 'Enter') {
            searchKeys.replaceAll(" ", "+");
            navigate("/search/" + searchKeys, {replace: true})
        }
    }

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
                    {/*SEARCH BAR*/}
                    <form className="nav-item mx-auto form-inline col-md-5">
                        <input className="form-control mr-sm-2 d-inline" type="text" placeholder="Search Books"
                               aria-label="SearchResults"
                               onChange={(e) => setSearchKeys(e.target.value)}
                               onKeyPress={(e) => checkForSearch(e)}
                        />
                    </form>
                    <AccountOptions />
                </div>

            </nav>
        </div>

    );
}

export default Navigation;