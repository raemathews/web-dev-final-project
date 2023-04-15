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

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />

        <Route path="login" element={<Login />}/>
          <Route path="profile" element={<Profile />} />
          <Route path="book-details/*" element={<BookDetails />} />
          <Route path="search/*" element={<Search />} />
        <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile active="reviews"/>} />
          <Route path="/profile/followers" element={<ProfileFollowers active="followers"/>} />
          <Route path="/profile/following" element={<ProfileFollowing active="following"/>} />
          <Route path="/profile/favorites" element={<ProfileFavorites active="favorites"/>} />
          <Route path="/book-details" element={<BookDetails />} />
          <Route path="/search" element={<Search />} />
        <Route path="/signUp" element={<SignUp />}/>
      </Routes>
    </Router>
  );
}

export default App;
