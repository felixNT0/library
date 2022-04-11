import React from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../service/getCurrentUser";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
   const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
      navigate("/");
  };
  return (
    <div className="nav">
      <Link to="/" className="nav-title">
        <h1 className="logo">My Library</h1>
      </Link>
{ !currentUser &&     <div className="ul">
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
            Book Shelf
          </Link>
        </li>
        <li>
          <Link className="btn" to="/return-book">
            Return Book
          </Link>
        </li>
        {currentUser && (
          <li className="auth" onClick={handleLogout}>
            Logout<i className="fa-solid fa-power-off"></i>
          </li>
        )}
        {!currentUser && (
          <React.Fragment>
            <li>
              <Link className="btn" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="btn" to="/signup">
                Sign Up
              </Link>
            </li>
          </React.Fragment>
        )}
      </div>}
    </div>
  );
}

export default NavBar;
