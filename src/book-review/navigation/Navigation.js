import React from 'react'
import {Link} from 'react-router-dom'
import AccountOptions from "./AccountOptions";
import Searchbar from "./Searchbar";
import {useSelector} from "react-redux";

const Navigation = () => {
    const {currentUser} = useSelector((state) => state.currentUser);

    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                <Link className="navbar-brand ps-3" to="/">
                    <i className="d-inline-block align-top fa-solid fa-books"/>
                    BOOKSTER
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Searchbar/>
                    <div className={"list-group"}>
                        {!currentUser && <Link to="/login" className={"list-group-item d-lg-none text-white bg-primary"}>Log In</Link>}
                        {!currentUser && <Link to="/signUp" className={"list-group-item d-lg-none text-white bg-primary"}>Sign Up</Link>}
                        {currentUser && <Link to="/profile" className={"list-group-item d-lg-none"}>Profile</Link>}
                        {currentUser && <Link to="/logout" className={"list-group-item d-lg-none bg-danger text-white"}>Log Out</Link>}
                    </div>
                    <AccountOptions/>
                </div>

            </nav>
        </div>

    );
}

export default Navigation;