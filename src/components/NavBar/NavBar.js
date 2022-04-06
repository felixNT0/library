import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav">
      <Link to="/" className="nav-title">
        <h1>My Library</h1>
      </Link>
      <div className="ul">
        <li>
          <Link className="btn" to="/book-list">
            Books
          </Link>
        </li>
        <li>
          <Link className="btn" to="/add-book">
            Add Book
          </Link>
        </li>
        <li>
          <Link className="btn" to="/borrow-book">
            Borrow Book
          </Link>
        </li>
        <li>
          <Link className="btn" to="/edit-book">
            Edit Book
          </Link>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
