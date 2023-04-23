import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import Navigation from "../navigation/Navigation";
import {Link} from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        console.log(username);
        console.log(password);
        try {
            await dispatch(loginThunk({ username, password }));
        } catch (e) {
            alert(e);
        }
    };

    const { currentUser, rejected } = useSelector((state) => state.currentUser);
    useEffect(() => {
        if (rejected) {
            setToast(true);
            setTimeout(function(){ setToast(false)}, 3000);
        }
        else {
            setToast(false);
        }
    }, [rejected])



    let [toast, setToast] = useState(false);
    return (
        <>
            <Navigation />

            {!currentUser && <>
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
            </>}
            {currentUser && <> <h1>You're all logged in!</h1>
                <button className="btn btn-warning">
                    <Link to="/profile">
                        Proceed to your profile
                    </Link>

                </button>
            </>}

            <div className={`${toast ? "" : "visually-hidden"}`}>
                <div className="alert alert-primary">
                    Unsuccessful Login: Please try again
                </div>
            </div>

        </>

    );


}
export default Login;