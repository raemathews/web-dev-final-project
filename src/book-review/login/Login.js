import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import Navigation from "../navigation/Navigation";
import {Link} from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
    return (
        <>
            <Navigation />
            <div>
                <h1>Login Screen</h1>
                <div>
                    <label>Username</label>
                    <input className="form-control"
                           type="text" value={username}
                           onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input className="form-control"
                           type="password" value={password}
                           onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <button onClick={handleLogin}>
                    Login
                </button>
            </div>
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
export default Login;