import React from 'react'
import Navigation from "../navigation/Navigation";
import SignUp from "../signUp/SignUp";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <Navigation />
            <h1>Login</h1>
            <h3>Please enter your username and password</h3>
            <form id="text-fields">
                <label htmlFor="text-fields-username">Username: </label>
                <input id="text-fields-username"/><br/>
                <label htmlFor="text-fields-password">Password: </label>
                <input type="password" id="text-fields-password"
                       /><br/>
            </form>
            <br/>
            <br/>
            <br/>

            <h3>Not a User Yet? Click here to sign up!</h3>
            <button className="btn btn-warning">
                <Link to="/signUp">
                    Sign Up for a New Account
                </Link>

            </button>

        </>
    );
}

export default Login