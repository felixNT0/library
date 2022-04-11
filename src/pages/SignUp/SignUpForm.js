import React from "react";
import { useState } from "react";
import styles from "./SignUp.module.css";
import { getUsersDataFromLocalStorage } from "../../service/getUsersDataFromLocalStorage";
import { useNavigate, Link, useParams } from "react-router-dom";

function SignUpForm() {
  const [add, setAdd] = useState(false);
  // const [displayError, setDisplayError] = useState(false)

  const [value, setValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let users = getUsersDataFromLocalStorage() || [];

    let checkUser = users.find(
      (user) =>
        user.username === value.username &&
        user.email === value.email &&
        user.password === value.password
    );
    if (checkUser) {
      setAdd(
        `${value.username}, You have an account already click on login to log you to your account`
      );
      return;
    } else {
      let user = { ...value, id: new Date().toJSON(), type: "user" };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(user));
      setValue(value);

      navigate("/");
    }
  };

  return (
    <div>
      <div className={styles.root}>
        <h1 className={styles.h1}>Welcome To Tsowa Ndakolo Felix Library</h1>
        <h3 className={styles.h3}>Create An Account</h3>
        <p className={styles.error}>{add}</p>
        <div className={styles.userIcon}>
          <i className="fas fa-user-plus"></i>
        </div>
        <form onSubmit={handleSubmitForm}>
          <input
            className={styles.input}
            required
            placeholder="Username"
            onChange={handleChange}
            name="username"
            type="text"
            autoComplete=""
          />

          <input
            className={styles.input}
            placeholder="Email"
            onChange={handleChange}
            name="email"
            required
            type="email"
          />

          <input
            required
            className={styles.input}
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
          />

          <button className={styles.submit}>Create Account</button>

          <div className={styles.change}>
            <p>
              Already Registered{" "}
              <Link className={styles.text} to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
