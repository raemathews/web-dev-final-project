import React, {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../services/auth-thunks";
import Navigation from "../navigation/Navigation";
import {Link} from "react-router-dom";
import {createUserThunk} from "../../services/users/users-thunk";
import {createLibrarianThunk} from "../../services/librarians/librarians-thunk";
import UserSignup from "./UserSignup";
import LibrarianSignUp from "./LibrarianSignUp";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [handle, setHandle] = useState("");
    const [email, setEmail] = useState("");
    const [profile_pic, setProfilePic] = useState("profile.jpg");
    const [phone_number, setPhoneNum] = useState("");
    const bio = "I'm a new user!"

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        try {
            await dispatch(loginThunk({username, password}));
            navigate("/profile");
        } catch (e) {
            alert(e);
        }
    };
    const [librarianSignUp, setLibrarian] = useState("");


    return (
        <>
            <Navigation/>
            <br />
            <div className={"container"}>
                <div classname={"row"}>
                    <div className={"col-10 col-md-4 mx-auto"}>
                        {!librarianSignUp &&
                            <UserSignup/>
                        }
                        {librarianSignUp &&
                            <LibrarianSignUp/>
                        }
                        <div className={"list-group"}>
                            <div onClick={() => setLibrarian(!librarianSignUp)}
                                 className={"btn mt-3 btn-warning bg-warning list-group-item"}>
                                Sign Up for a {librarianSignUp ? "Regular" : "Librarian"} Account
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
        ;


}

export default SignUp;