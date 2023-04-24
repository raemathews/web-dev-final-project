import React from 'react'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {loginThunk} from "../services/auth-thunks";
import {createUserThunk} from "../../services/users/users-thunk";
import {createLibrarianThunk} from "../../services/librarians/librarians-thunk";

const LibrarianSignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [library, setLibrary] = useState("");
    const [handle, setHandle] = useState("");
    const [profile_pic, setProfilePic] = useState("profile.jpg");
    const [librarianSignUp, setLibrarian] = useState("");
    const bio = "I'm a new user!"
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async () => {
        let fieldsPopulated =
            username.length > 0 &&
            password.length > 0 &&
            handle.length > 0 &&
            profile_pic !== "profile.jpg" &&
            library.length > 0;
        if (fieldsPopulated) {
            try {
                await dispatch(loginThunk({username, password}));
                navigate("/");
            } catch (e) {
                alert(e);
            }
        } else {
            alert("Finish populating all the fields, then we'll make your new account!")
        }
    };
    const handleLibrarianSignUp = async () => {
        try {
            const admin = true
            await dispatch(createLibrarianThunk({username, password, handle, library, bio, admin, profile_pic}));
            handleLogin();
        } catch (e) {
            alert(e);
        }
    };
    return (
        <>
            <div>
                <h5>New Librarian Account</h5>
                <div className={"mt-3"}>
                    <label>Username</label>
                    <input className="form-control"
                           type="text" value={username} placeholder={"Ex: bookLover99"}
                           onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className={"mt-3"}>
                    <label>Handle</label>
                    <input className="form-control"
                           type="handle" value={handle} placeholder={"Ex: @yourHandle"}
                           onChange={(event) => setHandle(event.target.value)}
                    />
                </div>
                <div className={"mt-3"}>
                    <label>Password</label>
                    <input className="form-control"
                           type="password" value={password} placeholder={"Ex: newPassword123"}
                           onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className={"mt-3"}>
                    <label>Library</label>
                    <input className="form-control"
                           type="handle" value={library} placeholder={"Ex: Boston Public Library"}
                           onChange={(event) => setLibrary(event.target.value)}
                    />
                </div>
                <div className={"mb-3 mt-3"}>
                    <label>Profile Picture</label>
                    <div>
                        <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {
                            setProfilePic('/images/option_1.png')
                        }}>
                            <img
                                width="60px"
                                src={`/images/option_1.png`}
                                style={{clipPath: "circle()"}}
                            />
                        </button>
                        <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {
                            setProfilePic('/images/option_2.png')
                        }}>
                            <img
                                width="60px"
                                src={`/images/option_2.png`}
                                style={{clipPath: "circle()"}}
                            />
                        </button>
                        <button className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {
                            setProfilePic('/images/option_3.png')
                        }}>
                            <img
                                width="60px"
                                src={`/images/option_3.png`}
                                style={{clipPath: "circle()"}}
                            />
                        </button>
                        <button width="60px" className="rounded-circle m-1 border-0 btn-outline-success" onClick={() => {
                            setProfilePic('/images/option_4.png')
                        }}>
                            <img
                                width="60px"
                                src={`/images/option_4.png`}
                                style={{clipPath: "circle()"}}
                            />
                        </button>


                    </div>
                </div>
                <div className={"list-group"}>
                    <div onClick={handleLibrarianSignUp} className={"btn btn-success bg-success text-white list-group-item"}>
                        Sign Up
                    </div>
                </div>
            </div>


        </>
    )
}

export default LibrarianSignUp