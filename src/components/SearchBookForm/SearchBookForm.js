import React, { useState } from "react";
import styles from "./SearchBookForm.module.css";

function SearchBookForm({ onSearch }) {
  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch(value);
  };

  return (
    <div className={styles.root}>
      <h3>Search For Books Here</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className={styles.input}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBookForm;
