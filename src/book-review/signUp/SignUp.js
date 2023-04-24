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
    const [email, setEmail] = useState("");
    const [profile_pic, setProfilePic] = useState("profile.jpg");
    const [phone_number, setPhoneNum] = useState("");
    const bio = "I'm a new user!"

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignUp = async () => {
        try {
            const admin = false
            await dispatch(createUserThunk({ username, password, handle, email, phone_number, profile_pic, bio, admin}));
            handleLogin();
        } catch (e) {
            alert(e);
        }
    };

    const handleLibrarianSignUp = async () => {
        try {
            const admin = true
            await dispatch(createLibrarianThunk({ username, password, handle, library, bio, admin, profile_pic }));
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
                    <div>
                        <label>Email</label>
                        <input className="form-control"
                               type="email" value={email} placeholder={"Ex: myemail@gmail.com"}
                               onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Phone Number</label>
                        <input className="form-control"
                               type="phoneNum" value={phone_number} placeholder={"Ex: 1234567890"}
                               onChange={(event) => setPhoneNum(event.target.value)}
                        />
                    </div>
                    <div>
                        <label>Profile Picture</label>
                        <div>
                            <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {setProfilePic('option_1.png')}}>
                                <img
                                    width="60px"
                                    src={`/images/option_1.png`}
                                    style={{clipPath: "circle()"}}
                                />
                            </button>
                            <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {setProfilePic('option_2.png')}}>
                                <img
                                    width="60px"
                                    src={`/images/option_2.png`}
                                    style={{clipPath: "circle()"}}
                                />
                            </button>
                            <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {setProfilePic('option_3.png')}}>
                                <img
                                    width="60px"
                                    src={`/images/option_3.png`}
                                    style={{clipPath: "circle()"}}
                                />
                            </button>
                            <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {setProfilePic('option_4.png')}}>
                                <img
                                    width="60px"
                                    src={`/images/option_4.png`}
                                    style={{clipPath: "circle()"}}
                                />
                            </button>


                        </div>
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
                    <h3>Please fill out the following:</h3>
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
                    <div>
                        <label>Profile Picture</label>
                        <div>
                            <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {setProfilePic('option_1.png')}}>
                                <img
                                    width="60px"
                                    src={`/images/option_1.png`}
                                    style={{clipPath: "circle()"}}
                                />
                            </button>
                            <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {setProfilePic('option_2.png')}}>
                                <img
                                    width="60px"
                                    src={`/images/option_2.png`}
                                    style={{clipPath: "circle()"}}
                                />
                            </button>
                            <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {setProfilePic('option_3.png')}}>
                                <img
                                    width="60px"
                                    src={`/images/option_3.png`}
                                    style={{clipPath: "circle()"}}
                                />
                            </button>
                            <button className="rounded-circle m-1 border-0 btn-outline-success " onClick={() => {setProfilePic('option_4.png')}}>
                                <img
                                    width="60px"
                                    src={`/images/option_4.png`}
                                    style={{clipPath: "circle()"}}
                                />
                            </button>


                        </div>
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