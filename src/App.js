import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./AddBook";
import BorrowBooks from "./BorrowBooks";
import EditBooks from "./EditBooks";
import BookList from "./pages/BookList/BookList";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/borrow-book" element={<BorrowBooks />} />
          <Route path="/edit-book" element={<EditBooks />} />
          <Route path="/book-list" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
