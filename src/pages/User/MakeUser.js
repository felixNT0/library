import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { getCurrentUser } from "../../service/getCurrentUser";
import { getUsersDataFromLocalStorage } from "../../service/getUsersDataFromLocalStorage";
import styles from "./UserSwitch.module.css";

function MakeUser() {
  const users =
    getUsersDataFromLocalStorage()?.filter((user) => user.type === "admin") ||
    [];

  const handleMakeUserAdmin = (id) => {
    console.log(id);
    const userIndex = users.findIndex((user) => user.id === id);

    console.log(userIndex);

    let updatedUser = [...users];
    console.log(updatedUser);
    updatedUser[userIndex].type = "user";

    localStorage.setItem("users", JSON.stringify(updatedUser));
    localStorage.setItem("currentUser", JSON.stringify(...updatedUser));
  };

  return (
    <div>
      <NavBar />
      <br />
      <p className={styles.error}></p>
      <h1>Make User Page</h1>
      <div className={styles.root}>
        {users.map((user) => (
          <div key={user.id}>
            <div className={styles.list}>
              <p className={styles.user}>
                <div className={styles.show}>
                  {user.username}
                  {/* {user.email} */}
                </div>
              </p>
              <button
                className={styles.submit}
                onClick={() => handleMakeUserAdmin(user.id)}
              >
                Make Admin User
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MakeUser;
