import {Link} from "react-router-dom";
import React from "react";

const AccountOptions = () => {
    return (
        <div className="nav-item ms-auto">
            <div className="nav-link dropdown-toggle btn btn-info pull-right pr-3 form-inline navbar-collapse collapse p-2"
                 id="navbarDropdownMenuLink"
                 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user ps-3"/>
            </div>
            <div className="dropdown-menu dropdown-menu-end"
                 aria-labelledby="navbarDropdownMenuLink">
                {/*TODO: only show this section if logged in*/}
                <div className="logged-in-user-options">
                    <Link to="/profile" className="dropdown-item">Profile</Link>
                    <Link to="/#" className="dropdown-item">Settings</Link>
                    <div className="dropdown-divider"/>
                </div>
                {/*TODO: log out vs in using real info*/}
                <Link to="/" className="dropdown-item">Log Out/Log In</Link>
                <Link to="/login" className="dropdown-item">Sign Up</Link>
            </div>
        </div>
    )
}

export default AccountOptions
