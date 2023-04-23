import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./book-review/home/Home";
import Login from "./book-review/login/Login";
import BookDetails from "./book-review/book-details/BookDetails";
import Profile from "./book-review/profile/Profile";
import Search from "./book-review/search/SearchResults";
import SignUp from "./book-review/signUp/SignUp";

import {configureStore} from "@reduxjs/toolkit";
import libraryReducer from "./reducers/library-reducer";
import usersReducer from './reducers/users-reducer';
import authReducer from "./book-review/reducers/auth-reducer";
import followersReducer from "./reducers/followers-reducer";
import {Provider} from "react-redux";
import reviewsReducer from "./reducers/reviews-reducer";
import ProfileScreen from "./book-review/profile/profile-screen";
import LogOut from "./book-review/login/LogOut";
import readingListReducer from "./reducers/reading-list-reducer";

const store = configureStore({reducer: {
            library: libraryReducer,
            users: usersReducer,
            currentUser: authReducer,
            reviews: reviewsReducer,
            readingList: readingListReducer,
            followers: followersReducer
        }});

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="book-details/works/:bookid" element={<BookDetails/>}/>
                    <Route path="search/:query" element={<Search/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<LogOut/>}/>
                    <Route path="/profileScreen"
                           element={<ProfileScreen />} />
                    <Route path="/signUp" element={<SignUp/>}/>
                    <Route path="/profile" element={<Profile active="reviews"/>}/>
                    <Route path="/profile/:uid" element={<Profile active="reviews"/>}/>
                    <Route path="/book-details" element={<BookDetails/>}/>
                    <Route path="/search" element={<Search/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
