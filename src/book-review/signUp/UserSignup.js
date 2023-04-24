import React from 'react'
import {createUserThunk} from "../../services/users/users-thunk";
import {useDispatch} from "react-redux";
import {loginThunk} from "../services/auth-thunks";
import {useNavigate} from "react-router";
import {useState} from "react";

const UserSignup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [library, setLibrary] = useState("");
    const [handle, setHandle] = useState("");
    const [email, setEmail] = useState("");
    const [profile_pic, setProfilePic] = useState("profile.jpg");
    const [phone_number, setPhoneNum] = useState("");
    const [librarianSignUp, setLibrarian] = useState("");
    const bio = "I'm a new user!"
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({ username, password }));
            navigate(-1);
        } catch (e) {
            alert(e);
        }
    };
    const handleSignUp = async () => {
        let fieldsPopulated =
            username.length > 0 &&
            password.length > 0 &&
            handle.length > 0 &&
            email.length > 0 &&
            profile_pic !== "profile.jpg" &&
            phone_number.length > 0;

        if(fieldsPopulated) {
            try {
                const admin = false
                await dispatch(createUserThunk({ username, password, handle, email, phone_number, profile_pic, bio, admin}));
                handleLogin();
            } catch (e) {
                alert(e);
            }
        }
        else {
            alert("Finish populating all the fields, then we'll make your new account!")
        }
    };

    return (
        <div>
            <h5>New User Account</h5>
            <div className={"mt-3"}>
                <label>Username</label>
                <input className="form-control"
                       type="text" value={username} placeholder={"Ex: @bookLover99"}
                       onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <div className={"mt-3"}>
                <label>Password</label>
                <input className="form-control"
                       type="password" value={password} placeholder={"Ex: @newPassword123"}
                       onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <div className={"mt-3"}>
                <label>Handle</label>
                <input className="form-control"
                       type="handle" value={handle} placeholder={"Ex: yourHandle"}
                       onChange={(event) => setHandle("@" + event.target.value)}
                />
            </div>
            <div className={"mt-3"}>
                <label>Email</label>
                <input className="form-control"
                       type="email" value={email} placeholder={"Ex: myemail@gmail.com"}
                       onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div className={"mt-3"}>
                <label>Phone Number</label>
                <input className="form-control"
                       type="phoneNum" value={phone_number} placeholder={"Ex: 1234567890"}
                       onChange={(event) => setPhoneNum(event.target.value)}
                />
            </div>

            {/*profile pics*/}
            <div className={"mb-3 mt-3"}>
                <label>Profile Picture</label>
                <div>
                    <button className="rounded-circle border-0" onClick={() => {setProfilePic('/images/option_1.png')}}>
                        <img
                            width="60px"
                            src={`/images/option_1.png`}
                            style={{clipPath: "circle()"}}
                        />
                    </button>
                    <button className="rounded-circle border-0" onClick={() => {setProfilePic('/images/option_2.png')}}>
                        <img
                            width="60px"
                            src={`/images/option_2.png`}
                            style={{clipPath: "circle()"}}
                        />
                    </button>
                    <button className="rounded-circle border-0" onClick={() => {setProfilePic('/images/option_3.png')}}>
                        <img
                            width="60px"
                            src={`/images/option_3.png`}
                            style={{clipPath: "circle()"}}
                        />
                    </button>
                    <button width="60px" className="rounded-circle border-0" onClick={() => {setProfilePic('/images/option_4.png')}}>
                        <img
                            width="60px"
                            src={`/images/option_4.png`}
                            style={{clipPath: "circle()"}}
                        />
                    </button>


                </div>
            </div>

            {/*finish btn*/}
            <div className={"list-group"}>
                <div onClick={handleSignUp} className={"btn btn-success bg-success text-white list-group-item"}>
                    Sign Up
                </div>
            </div>
        </div>
    )
}

export default UserSignup
