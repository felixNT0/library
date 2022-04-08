import React, { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./AddBook.module.css";

// import axios from 'axios'

const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
  // return []
};

function AddBook() {
  //const URL = "  http://localhost:8000/books"
  const [add, setAdd] = useState(false);
  const [value, setValue] = useState({
    title: "",
    author: "",
  });

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
 const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    let books = getDataFromLocalStorage();
    books.push({ ...value, id: new Date().toJSON() });

    localStorage.setItem("books", JSON.stringify(books));
    setValue({
      title: "",
      author: "",
    });
    setAdd("You have just successfully borrow a book from the library");
    navigate("/book-list")
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.headerText}>Add book to Library</h3>
      <p className={styles.report}>{add}</p>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <input
            className={styles.input}
            type="text"
            placeholder="Book Title"
            onChange={handleChange}
            name="title"
            // value={data}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Book Autor"
            onChange={handleChange}
            name="author"
            //  value={data}
          />
          <button className={styles.submit} type="submit">
            Add More Books
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
