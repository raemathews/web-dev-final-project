import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./book-review/home/Home";
import Login from "./book-review/login/Login";
import BookDetails from "./book-review/book-details/BookDetails";
import Profile from "./book-review/profile/Profile";
import Search from "./book-review/search/Search";


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/book-details" element={<BookDetails />} />
          <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
