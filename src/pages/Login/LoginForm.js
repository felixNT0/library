import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import SignUpForm from "../SignUp/SignUpForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getUsersDataFromLocalStorage } from "../../service/getUsersDataFromLocalStorage";
import { getUsersDataThatHaveLoginBeforeFromLocalStorage } from "../../service/getCurrentUser";

function LoginForm() {
  // const [add, setAdd] = useState(false);
  // const [updated, setUpdated] = useState(false);
  const [value, setValue] = useState({ email: "", password: "" });
  const [error, setError] = useState();

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const navigate = useNavigate();
  const handleSubmitForm = (e) => {
    e.preventDefault();
    let users = getUsersDataFromLocalStorage();
    let user = users.find(
      (user) => user.email === value.email && user.password === value.password
    );
    // console.log(user);
    if (!user) {
      setError("Invalid email/password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    // setUpdated(true);
    navigate("/");
  };

  return (
    <div>
      <div className={styles.root}>
        <h1 className={styles.h1}>Welcome To Tsowa Ndakolo Felix Library</h1>
        <h3 className={styles.h3}>LogIn to your account</h3>
        <div className={styles.userIcon}>
          <i className="fas fa-user-circle"></i>
        </div>
        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmitForm}>
          <input
            required
            className={styles.input}
            placeholder="Email"
            onChange={handleChange}
            name="email"
            type="text"
          />

          <input
            required
            className={styles.input}
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />

          <div className={styles.option}>
            <label>
              <input type="checkbox" name="" />
              Remember Me
            </label>
            <Link className={styles.text} to="/resetpassword">
              Forget Your Password
            </Link>
          </div>

          <button className={styles.submit}>LogIn</button>

          <div>
            <p className={styles.change}>
              Not Registered?{" "}
              <Link className={styles.text} to="/signup">
                Create an Account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
