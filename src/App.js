import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./book-review/home/Home";
import BookDetails from "./book-review/book-details/BookDetails";
import Search from "./book-review/search/SearchResults";
import ProfileFollowing from "./book-review/profile/ProfileFollowing";
import ProfileFollowers from "./book-review/profile/ProfileFollowers";
import ProfileFavorites from "./book-review/profile/ProfileFavorites";
import SignUp from "./book-review/signUp/SignUp";

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import LoginScreen from "./book-review/login/login-screen";
import ProfileScreen from "./book-review/profile/profile-screen";
import authReducer from "./book-review/reducers/auth-reducer";

const store = configureStore({
  reducer: {
    auth: authReducer}});


function App() {
  return (
      <Provider store={store}>
    <Router>
      <Routes>
        <Route index element={<Home />} />



          <Route path="book-details/*" element={<BookDetails />} />
          <Route path="search/*" element={<Search />} />
        <Route path="/login"
               element={<LoginScreen />} />
        <Route path="/profile"
               element={<ProfileScreen />} />

          <Route path="/profile/followers" element={<ProfileFollowers active="followers"/>} />
          <Route path="/profile/following" element={<ProfileFollowing active="following"/>} />
          <Route path="/profile/favorites" element={<ProfileFavorites active="favorites"/>} />
          <Route path="/book-details" element={<BookDetails />} />
          <Route path="/search" element={<Search />} />
        <Route path="/signUp" element={<SignUp />}/>
      </Routes>
    </Router>
      </Provider>
  );
}

export default App;

//<Route path="profile" element={<Profile />} />
//<Route path="/login" element={<Login />}/>

//<Route path="login" element={<Login />}/>
//<Route path="/profile" element={<Profile active="reviews"/>} />