import {Link} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../services/auth-thunks";

const AccountOptions = () => {
    const dispatch = useDispatch();
    const {currentUserId} =
        useSelector(store => store.currentUser)
    const handleLogout = () => {
        dispatch(logoutThunk)
    }
    return (
        <div className="nav-item ms-auto">
            <div
                className="nav-link dropdown-toggle btn btn-info pull-right pr-3 form-inline navbar-collapse collapse p-2"
                id="navbarDropdownMenuLink"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-user ps-3"/>
            </div>
            <div className="dropdown-menu dropdown-menu-end"
                 aria-labelledby="navbarDropdownMenuLink">
                {
                    currentUserId &&
                    <>
                        <div className="logged-in-user-options">
                            <Link to="/profile" className="dropdown-item">Profile</Link>
                            <Link to="/#" className="dropdown-item">Settings</Link>
                            <div className="dropdown-divider"/>
                        </div>
                        <Link to="/login" className="dropdown-item" onClick={handleLogout}>Log Out</Link>
                    </>
                }
                <Link to="/login" className="dropdown-item">Sign In</Link>
            </div>
        </div>
    )
}

export default AccountOptions
