import { useParams } from "react-router";
import React, { useState } from "react";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import styles from "./EditBook.module.css";

export default function EditBook({ book, onUpdate }) {
  const { id, title, author } = book;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState({
    title: title,
    author: author,
  });
  const [updated, setUpdated] = useState(false);

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let books = getBooksFromLocalStorage();

    const bookIndex = books.findIndex((book) => book.id === id);

    books[bookIndex].title = value.title;
    books[bookIndex].author = value.author;

    localStorage.setItem("books", JSON.stringify(books));
    onUpdate();

    setUpdated(true);
    setEdit(false);
  };

  return (
    <div>
      <br />
      <button className={styles.click} onClick={() => setEdit(!edit)}>
        Edit Book <i className="fas fa-edit"></i>
      </button>

      {edit && (
        <div>
          <h3 className={styles.h3}>Edit book in Library</h3>
          {updated && (
            <p>You have successfully update the book in the library</p>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.root}>
              <input
                className={styles.input}
                type="text"
                placeholder="Book Title"
                onChange={handleChange}
                name="title"
                defaultValue={book.title}
                // value={data}
              />
              <input
                className={styles.input}
                type="text"
                placeholder="Book Autor"
                onChange={handleChange}
                name="author"
                defaultValue={book.author}
                //  value={data}
              />

              <button className={styles.button} type="submit">
                Update the Edited Book
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
