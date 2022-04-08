import React, { useState } from "react";
import styles from "./BorrowBooks.module.css";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import { getBorrowedBooksFromLocalStorage } from "../../service/getBorrowedBooksFromLocalStorage";
import { Navigate } from "react-router";

function BorrowBooks() {
  const [add, setAdd] = useState(false);
  const [value, setValue] = useState({
    title: "",
    author: "",
  });

  const handleChange = (event) => {
    setValue((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let books = getBooksFromLocalStorage();
    const bookTitleIndex = books.findIndex(
      (item) => item.title === value.title
    );
    const bookFindTitle = books.find((item) => item.title === value.title);
    const bookFindAuthor = books.find((item) => item.author === value.author);
    const borrowedBooks = getBorrowedBooksFromLocalStorage();

    if (bookFindTitle && bookFindAuthor) {
      borrowedBooks.push(bookFindTitle);
      books.splice(bookTitleIndex, 1);
      localStorage.setItem("books", JSON.stringify(books));
      setValue({
        title: "",
        author: "",
      });
      localStorage.setItem("borrowBooks", JSON.stringify(borrowedBooks));
      setAdd("You have just successfully borrow a book from the library");
      Navigate("/book-list");
    } else if (!bookFindTitle) {
      setAdd("book not found");
    } else {
      setAdd("author not found");
    }
  };

  return (
    <div className={styles.root}>
      <h3 className={styles.headerText}>Borrow Book From The Library</h3>
      <p className={styles.report}>{add}</p>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Book Title"
          onChange={handleChange}
          name="title"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Book Autor"
          onChange={handleChange}
          name="author"
        />
        <button className={styles.submit} type="submit">
          Borrow Books
        </button>
      </form>
    </div>
  );
}

export default BorrowBooks;
