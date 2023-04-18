import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./book-review/home/Home";
import Login from "./book-review/login/Login";
import BookDetails from "./book-review/book-details/BookDetails";
import Profile from "./book-review/profile/Profile";
import Search from "./book-review/search/SearchResults";
import ProfileFollowing from "./book-review/profile/ProfileFollowing";
import ProfileFollowers from "./book-review/profile/ProfileFollowers";
import ProfileReads from "./book-review/profile/ProfileReads";
import ProfileWillReads from "./book-review/profile/ProfileWillReads";
import SignUp from "./book-review/signUp/SignUp";

import {configureStore} from "@reduxjs/toolkit";
import libraryReducer from "./reducers/library-reducer";
import usersReducer from './reducers/users-reducer';
import {Provider} from "react-redux";

const store = configureStore(
    {reducer: {library: libraryReducer,
        users: usersReducer}});

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="profile" element={<Profile/>}/>
            <Route path="book-details/*" element={<BookDetails/>}/>
            <Route path="search/:query" element={<Search/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element={<Profile active="start"/>}/>
            <Route path="/profile/followers" element={<ProfileFollowers active="followers"/>}/>
            <Route path="/profile/following" element={<ProfileFollowing active="following"/>}/>
            <Route path="/profile/reads" element={<ProfileReads active="reads"/>}/>
            <Route path="/profile/willReads" element={<ProfileWillReads active="willReads"/>}/>
            <Route path="/book-details" element={<BookDetails/>}/>
            <Route path="/search" element={<Search/>}/>
          </Routes>
        </Router>
      </Provider>
  );
}

export default App;
