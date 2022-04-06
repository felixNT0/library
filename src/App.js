import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AddBook from "./AddBook"
import BorrowBooks from "./BorrowBooks"
import EditBooks from "./EditBooks"
import Library from "./Library"
//import SearchBar from "./SearchBar";
import NavBar from "./NavBar"
import Home from "./Home"

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/home' exact element={<Home />} />
          <Route path='/add-book' element={<AddBook />} />
          <Route path='/borrow-book' element={<BorrowBooks />} />
          <Route path='/edit-book' element={<EditBooks />} />
          <Route path='/library' element={<Library/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
