import React, { useState } from "react";
import styles from "./ReturnBook.module.css";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import { getBorrowedBooksFromLocalStorage } from "../../service/getBorrowedBooksFromLocalStorage";
import NavBar from "../../components/NavBar/NavBar";

function ReturnBook() {
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
  let borrowedBooks = getBorrowedBooksFromLocalStorage();
  const bookTitleIndex = borrowedBooks.findIndex(
    (item) => item.title === value.title
  );
  const bookFindTitle = borrowedBooks.find(
    (item) => item.title === value.title
  );
  const bookFindAuthor = borrowedBooks.find(
    (item) => item.author === value.author
  );
  const books = getBooksFromLocalStorage();

  if (bookFindTitle && bookFindAuthor) {
    books.push(bookFindTitle);
    borrowedBooks.splice(bookTitleIndex, 1);
    localStorage.setItem("borrowedBooks", JSON.stringify(borrowedBooks));
    setValue({
      title: "",
      author: "",
    });
    localStorage.setItem("books", JSON.stringify(books));
    setAdd("You have just successfully return a book to the library");
  } else if (!bookFindTitle) {
    setAdd("book not found");
  } else {
    setAdd("author not found");
  }
  };

  return (
    <div>
      <NavBar/>
      <div className={styles.root}>
        <h3 className={styles.headerText}>Return Book to The Library</h3>
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
            Return Books
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReturnBook;
