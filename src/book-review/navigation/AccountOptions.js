import {Link} from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";
import currentUserSlice from "../../reducers/current-user-reducer";

const AccountOptions = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className="nav-item ms-auto">
            <div className="nav-link dropdown-toggle btn btn-info pull-right pr-3 form-inline navbar-collapse collapse p-2"
                 id="navbarDropdownMenuLink"
                 data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user ps-3"/>
            </div>
            <div className="dropdown-menu dropdown-menu-end"
                 aria-labelledby="navbarDropdownMenuLink">
                {!currentUser && <Link to="/login" className="dropdown-item">Log In</Link>} |
                {!currentUser && <Link to="/signUp" className="dropdown-item">Sign Up</Link>} |
                {currentUser  && <Link to="/profile" className="dropdown-item">Profile</Link>} |
                {currentUser  && <Link to="/#" className="dropdown-item">Settings</Link>}
                {currentUser  && <Link to="/logOut" className="dropdown-item">Log Out</Link>}


            </div>
        </div>
    )
}

export default AccountOptions
