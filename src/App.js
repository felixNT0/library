import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook/AddBook";
import BorrowBooks from "./pages/BorrowBooks/BorrowBooks";
import BookList from "./pages/BookList/BookList";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail/BookDetail";
import SignUpForm from "./pages/SignUp/SignUpForm";
import LoginForm from "./pages/Login/LoginForm";
import UserAccountPasswordReset from "./pages/User/UserAccountPasswordReset";
import ReadBook from "./pages/ReadBook/ReadBook";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/borrow-book" element={<BorrowBooks />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/read-book/:id" element={<ReadBook />} />
          <Route path="/login" exact element={<LoginForm />} />
          <Route path="/signup" exact element={<SignUpForm />} />
          <Route path="/resetpassword" element={<UserAccountPasswordReset />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
