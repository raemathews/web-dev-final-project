import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./book-review/home/Home";
import Login from "./book-review/login/Login";
import BookDetails from "./book-review/book-details/BookDetails";
import Profile from "./book-review/profile/Profile";
import Search from "./book-review/search/SearchResults";
import ProfileFollowing from "./book-review/profile/ProfileFollowing";
import ProfileFollowers from "./book-review/profile/ProfileFollowers";
import ProfileFavorites from "./book-review/profile/ProfileFavorites";
import SignUp from "./book-review/signUp/SignUp";


import {configureStore} from "@reduxjs/toolkit";
import libraryReducer from "./reducers/library-reducer";
import usersReducer from './reducers/users-reducer';
import authReducer from "./book-review/reducers/auth-reducer";
import {Provider} from "react-redux";
import ProfileScreen from "./book-review/profile/profile-screen";
import LogOut from "./book-review/login/LogOut";

const store = configureStore(
    {reducer: {library: libraryReducer,
            users: usersReducer, currentUser: authReducer}});

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="book-details/*" element={<BookDetails/>}/>
                    <Route path="search/:query" element={<Search/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<LogOut/>}/>
                    <Route path="/profileScreen"
                           element={<ProfileScreen />} />
                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path="/profile/:uid" element={<Profile ownAccount={false} active="reviews"/>}/>
                    <Route path="/profile" element={<Profile ownAccount={true} active="reviews"/>}/>
                    <Route path="/book-details" element={<BookDetails/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
