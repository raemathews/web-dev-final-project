import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/auth-thunks";
import Navigation from "../navigation/Navigation";
import {Link} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogin = async () => {
        // console.log(username);
        // console.log(password);
        try {
            await dispatch(loginThunk({username, password}));
        } catch (e) {
            alert(e);
        }
    };

    const {currentUser, rejected} = useSelector((state) => state.currentUser);
    useEffect(() => {
        if (rejected) {
            setToast(true);
            setTimeout(function () {
                setToast(false)
            }, 3000);
        } else {
            setToast(false);
        }
    }, [rejected])


    let [toast, setToast] = useState(false);
    return (
        <>
            <Navigation/>
            <div className={"container"}>
                <br />
                <br />
                <div className={"row mt-4"}>
                    <div className={"col-1 col-md-4"} />
                    <div className={"col-10 col-md-4"}>
                        {!currentUser && <>
                            <div className={"pt-6"}>
                                <label>Username</label>
                                <input className="form-control"
                                       type="text" value={username}
                                       onChange={(event) => setUsername(event.target.value)}
                                />
                            </div>
                            <div className={"mt-3"}>
                                <label>Password</label>
                                <input className="form-control"
                                       type="password" value={password}
                                       onChange={(event) => setPassword(event.target.value)}
                                />
                            </div>
                            <div className={"list-group"}>
                            <button className={"btn btn-primary list-group-item bg-primary text-white mt-2 d-block"} onClick={handleLogin}>
                                Login
                            </button>

                                <br />
                                <br />
                                <div className={"text-muted text-center"}>No account yet? No problem.</div>
                            <button className="btn btn-warning list-group-item text-black bg-warning d-block">
                                <Link to="/signUp">
                                    Sign Up
                                </Link>

                            </button>
                            </div>
                        </>
                        }

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
                    </div>
                    <div className={"col-1 col-md-4"} />

                </div>
            </div>
        </>

    );


}

export default Login;