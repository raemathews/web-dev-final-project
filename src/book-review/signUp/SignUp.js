import React, { useState } from "react";
import { useNavigate } from "react-router";
import {useDispatch, useSelector} from "react-redux";
import { loginThunk } from "../services/auth-thunks";
import Navigation from "../navigation/Navigation";
import {Link} from "react-router-dom";
import {createUserThunk} from "../../services/users/users-thunk";
import {createLibrarianThunk} from "../../services/librarians/librarians-thunk";
function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [library, setLibrary] = useState("");
    const [handle, setHandle] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignUp = async () => {
        try {
            await dispatch(createUserThunk({ username, password, handle }));
            handleLogin();
        } catch (e) {
            alert(e);
        }
    };

    const handleLibrarianSignUp = async () => {
        try {
            await dispatch(createLibrarianThunk({ username, password, handle, library }));
            handleLogin();
        } catch (e) {
            alert(e);
        }
    };

    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
    const [librarianSignUp, setLibrarian] = useState("");


    return (
        <>
            <Navigation />
            {!librarianSignUp && <>
            <div>
                <h1>Sign Up for a New Account!</h1>
                <h3>Please chose a new username, password, and handle to create your account</h3>
                <div>
                    <label>Username</label>
                    <input className="form-control"
                           type="text" value={username} placeholder={"Ex: @bookLover99"}
                           onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input className="form-control"
                           type="password" value={password} placeholder={"Ex: @newPassword123"}
                           onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <label>Handle</label>
                    <input className="form-control"
                           type="handle" value={handle} placeholder={"Ex: yourHandle"}
                           onChange={(event) => setHandle(event.target.value)}
                    />
                </div>
                <button onClick={handleSignUp}>
                    Sign Up
                </button>
            </div>
            <br/>
            <br/>
            <div>
                <h1>Are you a Librarian? Click below to create a librarian account:</h1>
                <button onClick={() => setLibrarian(true)}>

                    Sign Up for a librarian Account
                </button>
            </div>


            </>}



            {librarianSignUp && <>
                <div>
                    <h1>Sign Up for a New Librarian Account!</h1>
                    <h3>Please chose a new username, password, and handle to create your account</h3>
                    <h3>Also enter the Library you are associated with!</h3>
                    <div>
                        <label>Username</label>
                        <input className="form-control"
                               type="text" value={username} placeholder={"Ex: bookLover99"}
                               onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input className="form-control"
                               type="password" value={password} placeholder={"Ex: newPassword123"}
                               onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Handle</label>
                        <input className="form-control"
                               type="handle" value={handle} placeholder={"Ex: @yourHandle"}
                               onChange={(event) => setHandle(event.target.value)}
                        />
                    </div>

                    <div>
                        <label>Library</label>
                        <input className="form-control"
                               type="handle" value={library} placeholder={"Ex: Boston Public Library"}
                               onChange={(event) => setLibrary(event.target.value)}
                        />
                    </div>
                    <button onClick={handleLibrarianSignUp}>
                        Sign Up
                    </button>
                </div>


            </>}

        </>

    );


}
export default SignUp;