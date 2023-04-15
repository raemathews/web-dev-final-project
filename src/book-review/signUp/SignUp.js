import React from 'react'
import Navigation from "../navigation/Navigation";

const SignUp = () => {
    return (
        <>
            <Navigation />
            <h1>Sign Up for a New Account!</h1>
            <h3>Please chose a new username and password to create your account</h3>
            <form id="text-fields">
                <label htmlFor="text-fields-username">Username: </label>
                <input id="text-fields-username"/><br/>
                <label htmlFor="text-fields-password">Password: </label>
                <input type="password" id="text-fields-password"
                /><br/>
            </form>
        </>
    );
}

export default SignUp