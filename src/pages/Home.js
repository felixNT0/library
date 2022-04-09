import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import UserProfile from "./User/Profile";
// import LoginForm from "./User/LoginForm";
// import SignUpForm from "./User/SignUpForm";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <NavBar />
      <UserProfile />
      <div
        style={{
          marginTop: "50px",
        }}
      >
        <h1>Welcome to Tsowa Ndakolo Felix Library</h1>
        <p>A library where you can borrow books and read and lot more...</p>

        <p>
          Please click <Link to={"/book-list"}>here</Link> to view the library
        </p>
      </div>
    </div>
  );
}

export default Home;
