import React, { useState } from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk, logoutThunk} from "../services/auth-thunks";
import Navigation from "../navigation/Navigation";
import {Link} from "react-router-dom";
function LogOut() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await dispatch(logoutThunk());
            navigate("/");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <>
            <Navigation />
            <div>
                <h1>Are you sure you want to logout?</h1>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>

        </>

    );


}
export default LogOut;