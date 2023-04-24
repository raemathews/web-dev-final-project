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
            <div className={"container"}>
                <br />
                <br />
                <div className={"row mt-4"}>
                    <div className={"col-1 col-md-4"} />
                    <div className={"col-10 col-md-4"}>
                        <h1>Are you sure you want to logout?</h1>
                        <button className="btn btn-warning"
                                onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                    <div className={"col-1 col-md-4"} />
                </div>
            </div>

        </>
    );


}
export default LogOut;