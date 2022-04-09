import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./AddBook.module.css";


const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("books");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
  
};

function AddBook() {
  
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
    <div>
      <NavBar />
      <div className={styles.root}>
        <h3 className={styles.headerText}>Add Book to The Library</h3>
        <p className={styles.report}>{add}</p>
        <form onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="Book Title"
            onChange={handleChange}
            name="title"
            required
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Book Autor"
            onChange={handleChange}
            name="author"
            required
          />
          <button className={styles.submit} type="submit">
            Add Books
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
