import React from "react";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCurrentUser } from "../../service/getCurrentUser";
import { getUsersDataFromLocalStorage } from "../../service/getUsersDataFromLocalStorage";

function UserProfile() {
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  // const currentUser = getCurrentUser()
  const [edit, setEdit] = useState(false);

  //  const [display, setDisplay] = useState(false)

  //   const checkUserDetail = () => {
  //     let checkUserIndex = currentUser.findIndex((user) => user.id === index);
  //     const currentUser = getCurrentUser();
  //     if (checkUserIndex) {
  //       setDisplay(true);
  //     } else {
  //       setDisplay(false);
  //     }
  //  }

  useEffect(() => {
    console.log(getCurrentUser());
    setCurrentUser(getCurrentUser());
  }, [localStorage.getItem("currentUser")]);

  return (
    <div>
      {currentUser && (
        <div>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Profile"
            className={styles.profile}
            onClick={() => setEdit(!edit)}
          >
            <i className="fas fa-user"></i>
          </button>

          {edit && (
            <div className={styles.user}>
              {/* {currentUser.find((user) => (
              <div key={user}>
                <p>{user.email}</p>
              </div>
            ))} */}

              <button
                onClick={() => setEdit(!edit)}
                className={styles.profileButton}
              >
                More Details
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserProfile;