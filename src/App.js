import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook/AddBook";
import BorrowBooks from "./pages/BorrowBooks/BorrowBooks";
import EditBooks from "./EditBooks";
import BookList from "./pages/BookList/BookList";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import BookDetail from "./pages/BookDetail/BookDetail";
import ReturnBook from "./pages/ReturnBook/ReturnBook";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/borrow-book" element={<BorrowBooks />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/return-book" element={<ReturnBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
