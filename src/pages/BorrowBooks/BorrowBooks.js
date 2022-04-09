import styles from "./BorrowBooks.module.css";
import { getBooksFromLocalStorage } from "../../service/getBooksFromLocalStorage";
import { getBorrowedBooksFromLocalStorage } from "../../service/getBorrowedBooksFromLocalStorage";

import { Navigate, useParams } from "react-router";

function BorrowBooks() {
  const { id } = useParams();
  const borrowedBooks = getBorrowedBooksFromLocalStorage();


  return (

    <div>
      <NavBar/>
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
            Borrow Books
          </button>
        </form>
      </div>

    <div className={styles.root}>
      <h3 className={styles.headerText}>Books Borrowed From The Library</h3>
      <ul>
        {borrowedBooks.map((book) => (
          <div className={styles.list} key={book.title}>
            <p className={styles.borrowedBooks}>
              {book.title} : {book.author}
            </p>
            <button
              className={styles.read}
              onClick={() => {
                console.log(book.id);
              }}
            >
              Read
            </button>
            {/* <button className={styles.returnBook} onClick={handleReturnBook}>
              Return Book
            </button> */}
          </div>
        ))}
      </ul>

    </div>
  );
}

export default BorrowBooks;
